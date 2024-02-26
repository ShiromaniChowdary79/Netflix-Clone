import React from "react";
import image from "../../assets/hero section.jpg";
import netflixImage from "../../assets/netflix-logo-0.png";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <header className="showcase">
      <div className="logo">
        <Link to="/">
          <img src={netflixImage} alt="Netflix Logo" />
        </Link>
      </div>
      <div className="showcase-content">
        <div className="forms">
          <form>
            <h1>Sign In</h1>
            <div className="info">
              <input
                className="email"
                type="email"
                placeholder="Email or phone number"
              />
              <br />
              <input className="email" type="password" placeholder="Password" />
            </div>
            <div className="button">
              <button className="btn-primary" type="submit">
                Sign In
              </button>
            </div>
            <div className="help">
              <div>
                <input value="true" type="checkbox" />
                <label>Remember me</label>
              </div>
              <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
            </div>
          </form>
        </div>
        <div className="signup">
          <p>New to Netflix ?</p>
          <a href="https://www.netflix.com/dz-en/">Sign up now</a>
        </div>
        <div className="more">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="contact">
            <a href="#">Questions? Contact us.</a>
          </div>
          <div className="gift">
            <a href="#">Gift Card Terms</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Statement</a>
          </div>
          <div className="select">
            <select>
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </footer>
    </header>
  );
}

export default Signup;
