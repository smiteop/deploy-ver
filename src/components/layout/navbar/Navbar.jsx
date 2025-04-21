import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-area">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <span>Our Story</span>
          </Link>

          {/* <SearchForm /> */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/">Home</Link>
              <ul className="dropdown-menu">
                <li><a href="https://edemy-react.envytheme.com/college/accommodation" target="_blank" rel="noopener noreferrer">
                  About Us
                </a></li>
                {/* <li><Link to="/">Online Training</Link></li>
                <li><Link to="/">Video Training</Link></li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Online Courses</Link>
              <ul className="dropdown-menu">
                <li><Link to="/courses/style1">Course</Link></li>
                <li><Link to="/courses/style2">How we start</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Offline Courses</Link>
              <ul className="dropdown-menu">
                <li><Link to="/about">Course</Link></li>
                <li><Link to="/contact">How we start</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/tutors">Tutor</Link>
              {/* <ul className="dropdown-menu">
                <li><Link to="/college/about">About College</Link></li>
                <li><Link to="/college/admission">Admissions</Link></li>
                <li><Link to="/college/management">Management</Link></li>
              </ul> */}
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
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
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
