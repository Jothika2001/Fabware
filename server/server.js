// const express = require("express");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");
// const ExcelJS = require("exceljs");
// const cors = require("cors");
// require("dotenv").config();

// // Set up file storage for images (use /tmp directory for writable storage in Vercel or serverless)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = "/tmp/feedbackimage"; // Use the /tmp directory in Vercel
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const originalName = file.originalname;
//     const sanitizedFileName = originalName.replace(/[^a-zA-Z0-9.-_]/g, "_");
//     cb(null, sanitizedFileName);
//   },
// });
// const upload = multer({ storage });

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT;
// const SECRET_KEY = process.env.SECRET_KEY;
// const adminUser = {
//   username: process.env.ADMIN_USERNAME,
//   password: process.env.ADMIN_PASSWORD,
// };

// // Middleware
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // Welcome route
// app.get("/", (req, res) => {
//   res.send("Welcome to the API");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// app.post("/submit-feedback", upload.single("image"), async (req, res) => {
//   const feedbackData = req.body;
//   const imagePath = req.file
//     ? path.join("/tmp/feedbackimage", req.file.filename)
//     : null;

//   if (imagePath) {
//     feedbackData.imagePath = imagePath;
//   }

//   try {
//     // Path to the Excel file (use /tmp for serverless writable storage)
//     const excelFilePath = path.join("/tmp", "feedback_data.xlsx");

//     // Create a new workbook or load an existing one
//     const workbook = new ExcelJS.Workbook();

//     // If the Excel file already exists, read it, otherwise, create a new one
//     if (fs.existsSync(excelFilePath)) {
//       await workbook.xlsx.readFile(excelFilePath);
//     } else {
//       // Add a worksheet if the file doesn't exist
//       const worksheet = workbook.addWorksheet("Feedback");

//       // Add headers if it's a new file
//       worksheet.columns = [
//         { header: "Name", key: "name", width: 20 },
//         { header: "Phone Number", key: "phoneNumber", width: 20 },
//         { header: "Email", key: "email", width: 25 },
//         { header: "Reward Option", key: "rewardOption", width: 20 },
//         { header: "Image Path", key: "imagePath", width: 40 },
//         { header: "Image", key: "image", width: 30 },
//       ];

//       worksheet.getRow(1).font = { bold: true };
//       worksheet.getRow(1).alignment = {
//         horizontal: "center",
//         vertical: "middle",
//       };
//       worksheet.getRow(1).height = 30;
//     }

//     // Get the first worksheet (the one we are working with)
//     const worksheet = workbook.worksheets[0];

//     // Add a new row with feedback data
//     const row = worksheet.addRow([
//       feedbackData.name,
//       feedbackData.phoneNumber,
//       feedbackData.email,
//       feedbackData.rewardOption,
//       imagePath || "", // If no image, store an empty string
//       "", // Placeholder for image
//     ]);

//     row.height = 50;
//     row.alignment = { vertical: "middle", horizontal: "center" };

//     // If there's an image, add it as an embedded image in the Excel sheet
//     if (imagePath) {
//       const imageBuffer = fs.readFileSync(imagePath);
//       const imageId = workbook.addImage({
//         buffer: imageBuffer,
//         extension: "jpeg", // Assuming it's a JPEG image
//       });

//       worksheet.addImage(imageId, {
//         tl: { col: 6, row: row.number - 1 }, // Place image in the 6th column
//         ext: { width: 100, height: 100 },
//       });

//       worksheet.getRow(row.number).height = 200; // Adjust row height for image
//     }

//     // Save the workbook (either new or updated) to the same file
//     await workbook.xlsx.writeFile(excelFilePath);

//     // Respond with a success message and a download link
//     res.json({
//       message: "Feedback submitted successfully",
//       downloadLink: "/download-feedback", // Provide a download link for the admin
//     });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

// app.post("/admin/login", (req, res) => {
//   const { username, password } = req.body;

//   if (username === adminUser.username && password === adminUser.password) {
//     const token = jwt.sign(
//       { username: adminUser.username, role: "admin" },
//       SECRET_KEY,
//       { expiresIn: "2m" }
//     );
//     res.json({ message: "Login successful", token });
//   } else {
//     res
//       .status(401)
//       .json({ message: "Invalid credentials...This page is only for Admin" });
//   }
// });

// // Protect routes with JWT (for downloading the Excel file, etc.)
// const verifyToken = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).send("Access denied. No token provided.");

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(400).send("Invalid token");
//   }
// };

// // Admin access middleware
// const isAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).send("Access denied. Admins only.");
//   }
//   next();
// };

// app.get("/download-feedback", verifyToken, isAdmin, (req, res) => {
//   const filePath = path.join("/tmp", "feedback_data.xlsx");

//   if (fs.existsSync(filePath)) {
//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );

//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=feedback_data.xlsx"
//     );

//     res.sendFile(filePath, (err) => {
//       if (err) {
//         res.status(500).json({ message: "Error sending file" });
//       }
//     });
//   } else {
//     res.status(404).json({ message: "File not found" });
//   }
// });

// // Correct the static folder path in your server.js
// app.use(express.static(path.join(__dirname, "../client/dist")));

// // Send the index.html for all other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });


const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const ExcelJS = require("exceljs");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL || "mongodb+srv://Jothika:Jothika%40123@cluster0.ckqsh.mongodb.net/feedbackDB";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = '/tmp/feedbackimage'; 
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

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
const adminUser = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

const connectDB = async () => {
  let attempts = 0;
  const maxAttempts = 5;
  while (attempts < maxAttempts) {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to MongoDB");
      return;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      attempts++;
      const delay = Math.pow(2, attempts) * 1000; 
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error("Failed to connect to MongoDB after multiple attempts.");
};

connectDB();

// Feedback Schema and Model
const feedbackSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  rewardOption: String,
  imagePath: String,  
  image: Buffer,     
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Submit feedback route
app.post("/submit-feedback", upload.single("image"), async (req, res) => {
  const feedbackData = req.body;

  let imagePath = null;
  let imageBuffer = null;

  // Debug: Check if the image is being received correctly
  console.log("File received:", req.file);
  
  // If an image is uploaded
  if (req.file) {
    imagePath = `/uploads/feedbackimage/${req.file.filename}`;  
    try {
      imageBuffer = fs.readFileSync(req.file.path); 
    } catch (err) {
      console.error("Error reading image file:", err);
      return res.status(500).json({ message: "Error reading image file" });
    }
  }

  // Debugging: Log the image path and buffer to ensure everything is correct
  //console.log("Image path:", imagePath);
  //console.log("Image buffer length:", imageBuffer ? imageBuffer.length : 0);

  // Attach the image path and buffer to feedback data
  feedbackData.imagePath = imagePath;
  feedbackData.image = imageBuffer;

  //console.log("Received feedback data:", feedbackData); // Debugging line

  try {
    // Save feedback data to MongoDB (both the path and the image buffer)
    const feedback = new Feedback(feedbackData);
    await feedback.save();

    //console.log("Feedback saved successfully."); // Debugging line

    // Return success response
    res.json({ message: "Feedback submitted successfully" });
  } catch (e) {
    //console.error("Error saving feedback:", e); // Debugging line
    res.status(500).json({ message: e.message });
  }
});

// Admin login route
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
      .json({ message: "Invalid credentials. This page is only for Admin." });
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

// Download feedback route with embedded images and image path
app.get("/download-feedback", verifyToken, isAdmin, async (req, res) => {
  try {
    // Fetch feedback data from the database
    const feedbacks = await Feedback.find();

    // Create Excel file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Feedback");

    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Phone Number", key: "phoneNumber", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Reward Option", key: "rewardOption", width: 20 },
      { header: "Image Path", key: "imagePath", width: 50 },
      { header: "Image", key: "image", width: 40 }, 
    ];

    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 30;

    // Add rows from feedback data
    for (let feedback of feedbacks) {
      let imageBase64 = '';
      if (feedback.image) {
        imageBase64 = feedback.image.toString('base64'); 
        const imageId = workbook.addImage({
          base64: imageBase64,
          extension: 'jpeg', 
        });
        worksheet.addImage(imageId, {
          tl: { col: 6, row: worksheet.rowCount + 1 }, 
          ext: { width: 100, height: 100 }, 
        });
      }

      worksheet.addRow([
        feedback.name,
        feedback.phoneNumber,
        feedback.email,
        feedback.rewardOption,
        feedback.imagePath || 'No image path', 
        imageBase64 ? 'Image included' : 'No image', 
      ]);
    }

    // Generate the Excel file as a buffer
    const fileBuffer = await workbook.xlsx.writeBuffer();

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=feedback_data.xlsx");

    res.send(fileBuffer);
  } catch (error) {
    res.status(500).json({ message: "Error generating Excel file", error: error.message });
  }
});

// Serve static files (like uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));  

// Send the index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
