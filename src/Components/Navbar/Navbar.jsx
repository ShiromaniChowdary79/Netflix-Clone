import "./Navbar.css";
import netflixImage from "../../assets/netflix-logo-0.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src={netflixImage}
          alt="Netflix"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div className="menu">
        <Link to="/Signup">
          <button className="signup-button">Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
