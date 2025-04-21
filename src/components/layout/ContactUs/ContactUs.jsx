import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="page-banner">
        <div>
          <h1 className="heroSection">Contact</h1>
        </div>
      </section>

      {/* Main Contact Container */}
      <div className="contact-container">
        {/* Left Section - Contact Info */}
        <div className="contact-details">
          <p className="contact-subtitle">Contact Details</p>
          <h2 className="main-heading">Get in Touch</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra.
          </p>

          <div className="contact-left">
  <div className="contact-block">
    <div className="icon-wrapper">
      <img src="/icons/location.svg" alt="Location" />
    </div>
    <div>
      <h3>Our Address</h3>
      <p>2750 Quadra Street Victoria Road, New York, Canada</p>
    </div>
  </div>

  <div className="contact-block">
    <div className="icon-wrapper">
      <img src="/icons/phone.svg" alt="Phone" />
    </div>
    <div>
      <h3>Contact</h3>
      <p>Mobile: <span className="bold">(+44) - 45789 - 5789</span></p>
      <p>Mail: <span className="bold">hello@edemy.com</span></p>
    </div>
  </div>

  <div className="contact-block">
    <div className="icon-wrapper">
      <img src="/icons/clock.svg" alt="Clock" />
    </div>
    <div>
      <h3>Hours of Operation</h3>
      <p>Monday - Friday: 09:00 - 20:00</p>
      <p>Sunday & Saturday: 10:30 - 22:00</p>
    </div>
  </div>
</div>


        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Ready to Get Started?</h2>
          <p className="form-description">
            Your email address will not be published. Required fields are marked *
          </p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email address" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your Subject" required />
              <input type="text" placeholder="Your Phone" required />
            </div>
            <textarea placeholder="Your message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
