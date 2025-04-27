import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchForm from "../searchform/SearchForm"

const Navbar = () => {
  return (
    <nav className="navbar-area">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <span>eDemy</span>
          </Link>

          {/* <SearchForm /> */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Home</Link>
              <ul className="dropdown-menu">
                <li><Link to="/">Home School</Link></li>
                <li><Link to="/">Online Training</Link></li>
                <li><Link to="/">Video Training</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Online Courses</Link>
              <ul className="dropdown-menu">
                <li><Link to="/courses/style1">Courses Style 1</Link></li>
                <li><Link to="/courses/style2">Courses Style 2</Link></li>
                <li><Link to="/courses/style3">Courses Style 3</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Offline Courses</Link>
              <ul className="dropdown-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Tutor</Link>
              <ul className="dropdown-menu">
                <li><Link to="/college/about">About College</Link></li>
                <li><Link to="/college/admission">Admissions</Link></li>
                <li><Link to="/college/management">Management</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Student</Link>
              <ul className="dropdown-menu">
                <li><Link to="/products/list">Product List</Link></li>
                <li><Link to="/products/detail">Product Details</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Blog</Link>
              <ul className="dropdown-menu">
                <li><Link to="/blog/style1">Blog Style 1</Link></li>
                <li><Link to="/blog/style2">Blog Style 2</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Contact</Link>
              <ul className="dropdown-menu mega-menu">
                <li><Link to="/">Example Item 1</Link></li>
                <li><Link to="/">Example Item 2</Link></li>
              </ul>
            </li>
          </ul>
          <Link to="/login" className="login-btn">
            <i className="fas fa-user"></i> Login/Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
