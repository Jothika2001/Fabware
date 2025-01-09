import { Link } from "react-router-dom";
import "./Discover.css";

function Discover() {
  return (
    <>
      <div className="discover">
        <h2 className="discover-title">
          Discover our products and save money with every purchase. Don't miss
          out on our exclusive, limited-time deals!
        </h2>
        <Link to="/products" className="btn text-light mt-5" style={{backgroundColor:"#ee3c4d"}}>Shop Now</Link>
      </div>
    </>
  );
}

export default Discover;
