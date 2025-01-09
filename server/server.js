const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const ExcelJS = require("exceljs");
const cors = require("cors");
require("dotenv").config();

// Set up file storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads/feedbackimage");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    const sanitizedFileName = originalName.replace(/[^a-zA-Z0-9.-_]/g, "_");
    cb(null, sanitizedFileName);
  },
});
const upload = multer({ storage });

// Initialize Express app
const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const adminUser = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

// Middleware
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(express.json());


// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Post route to handle feedback and image uploads
app.post("/submit-feedback", upload.single("image"), async (req, res) => {
  const feedbackData = req.body;
  const imagePath = req.file
    ? path.join("uploads/feedbackimage", req.file.filename)
    : null;

  if (imagePath) {
    feedbackData.imagePath = imagePath;
  }

  try {
    const filePath = "fabware.xlsx";

    const workbook = new ExcelJS.Workbook();

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
    } else {
      const worksheet = workbook.addWorksheet("user");

      worksheet.addRow([
        "Name",
        "Phone Number",
        "Email",
        "Reward Option",
        "Image Path",
        "Image",
      ]);

      worksheet.getRow(1).font = { bold: true };
      worksheet.getRow(1).alignment = {
        horizontal: "center",
        vertical: "middle",
      };
      worksheet.getRow(1).height = 30;
    }

    const worksheet =
      workbook.getWorksheet("user") || workbook.addWorksheet("user");

    worksheet.getColumn(1).width = 20;
    worksheet.getColumn(2).width = 15;
    worksheet.getColumn(3).width = 25;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 20;

    const row = worksheet.addRow([
      feedbackData.name,
      feedbackData.phoneNumber,
      feedbackData.email,
      feedbackData.rewardOption,
      imagePath,
      "",
    ]);

    row.height = 50;
    row.alignment = { vertical: "middle", horizontal: "center" };

    if (imagePath) {
      const imageId = workbook.addImage({
        filename: imagePath,
        extension: "jpeg",
      });

      worksheet.addImage(imageId, {
        tl: { col: 5, row: row.number - 1 },
        ext: { width: 100, height: 100 },
      });

      worksheet.getRow(row.number).height = 200;
    }

    await workbook.xlsx.writeFile(filePath);
    res.status(200).json({ message: "Feedback and image added successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Admin login (username and password)
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign(
      { username: adminUser.username, role: "admin" },
      SECRET_KEY,
      { expiresIn: "2m" }
    );
    res.json({ message: "Login successful", token });
  } else {
    res
      .status(401)
      .json({ message: "Invalid credentials...This page is only for Admin" });
  }
});

// Protect routes with JWT (for downloading the Excel file, etc.)
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token");
  }
};

// Admin access middleware
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied. Admins only.");
  }
  next();
};

// Route to download the Excel file (admin only)
app.get("/download-feedback", verifyToken, isAdmin, (req, res) => {
  const filePath = path.join(__dirname, "fabware.xlsx");

  if (fs.existsSync(filePath)) {
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=feedback_data.xlsx"
    );

    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).json({ message: "Error sending file" });
      }
    });
  } else {
    res.status(404).json({ message: "File not found" });
  }
});

// Correct the static folder path in your server.js

app.use(express.static(path.join(__dirname, '../client/dist')));

// Send the index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
