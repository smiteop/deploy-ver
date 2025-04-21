import React from 'react';
import Navbar from '../navbar/Navbar';
import './AboutUs.css'
import Footer from '../footer/Footer';

const AboutUs = () => {
    return (
        <div className="pageWrapper">
            <Navbar />
            {/* Hero Section */}
            <section className="heroSection">
                <h1 className="heroTitle">About Us</h1>
                <p className="heroSubtitle">
                    Crafting innovative solutions with passion and purpose.
                </p>
            </section>

            {/* Mission Section */}
            <section className="section">
                <h2 className="sectionTitle">Our Story</h2>
                <p className="sectionText">
                    1-to-1 Home Tutors was established in 2017 with a vision to transform personalized learning. Recognizing the need for quality, individualized academic support, we connected students with highly qualified tutors for tailored one-on-one sessions.
                    Our unique approach, which focuses on student-centric learning and continuous feedback, has helped countless students excel in their academics.
                    Through our advanced app and web-based platform, we offer seamless class management, scheduling, and performance tracking, ensuring an efficient learning experience. Our goal is to empower students to reach their full potential and foster a passion for lifelong learning.

                </p>
            </section>

            {/* Mission Section */}
            <section className="section">
                <h2 className="sectionTitle">Our Mission</h2>
                <p className="sectionText">
                To revolutionize personalized learning by providing high-quality, one-on-one tutoring that empowers students to excel academically and develop a lifelong passion for learning.
                </p>
            </section>

            <section className="section">
                <h2 className="sectionTitle">Vision</h2>
                <p className="sectionText">
                To become the leading platform for individualized learning, fostering academic excellence and personal growth for students across diverse educational backgrounds.
                </p>
            </section>

            {/* Team Section */}
            <section className="section">
                <h2 className="sectionTitle">Meet Our Team</h2>
                <div className="teamGrid">
                    {/* Team Member 1 */}
                    <div className="teamCard">
                        <div className="teamImage"></div>
                        <h3 className="teamName">John Doe</h3>
                        <p className="teamRole">Founder & CEO</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="teamCard">
                        <div className="teamImage"></div>
                        <h3 className="teamName">Jane Smith</h3>
                        <p className="teamRole">Lead Developer</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="teamCard">
                        <div className="teamImage"></div>
                        <h3 className="teamName">Alex Brown</h3>
                        <p className="teamRole">UX Designer</p>
                    </div>
                </div>
            </section>

<div className="tutorMessage">
    <div >
    <h2 className="title playfair-display-font">
									A message from the college dean
								</h2>
                                <div className="paraMessage">
                                <p>
									Vestibulum ante ipsum primis in faucibus
									orci luctus et ultrices posuere cubilia
									Curae; Donec velit neque, auctor sit amet
									aliquam vel, ullamcorper sit amet ligula.
									Curabitur aliquet quam id dui posuere
									blandit. Curabitur non nulla sit amet nisl
									tempus convallis quis ac lectus. Cras
									ultricies ligula sed magna dictum porta.
								</p>

								<p>
									Mauris blandit aliquet elit, eget tincidunt
									nibh pulvinar a. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Vivamus suscipit tortor eget felis
									porttitor volutpat. Curabitur non nulla sit
									amet nisl tempus convallis quis ac lectus.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vestibulum ac diam sit
									amet quam vehicula elementum sed sit amet
									dui.{" "}
								</p>
                                </div>

    </div>
    <div>
    <h2 className="title playfair-display-font">
									A message from the college dean
								</h2>
                                <div className="paraMessage">
                                <p>
									Vestibulum ante ipsum primis in faucibus
									orci luctus et ultrices posuere cubilia
									Curae; Donec velit neque, auctor sit amet
									aliquam vel, ullamcorper sit amet ligula.
									Curabitur aliquet quam id dui posuere
									blandit. Curabitur non nulla sit amet nisl
									tempus convallis quis ac lectus. Cras
									ultricies ligula sed magna dictum porta.
								</p>

								<p>
									Mauris blandit aliquet elit, eget tincidunt
									nibh pulvinar a. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Vivamus suscipit tortor eget felis
									porttitor volutpat. Curabitur non nulla sit
									amet nisl tempus convallis quis ac lectus.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vestibulum ac diam sit
									amet quam vehicula elementum sed sit amet
									dui.{" "}
								</p>
                                </div>
    </div>
</div>
            

            {/* Footer Call-to-Action */}
            <div>
                <Footer/>
            </div>
           
        </div>
    );
};

// Inline styles for an attractive design
// const styles = {
//     pageWrapper: {
//         fontFamily: "'Poppins', sans-serif",
//         color: '#333',
//         backgroundColor: '#f9f9f9',
//     },
//     // Hero Section
//     heroSection: {
//         background: 'linear-gradient(135deg, #6b48ff 0%, #00d4ff 100%)',
//         padding: '80px 20px',
//         textAlign: 'center',
//         color: '#fff',
//     },
//     heroTitle: {
//         fontSize: '48px',
//         fontWeight: 'bold',
//         marginBottom: '20px',
//         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//     },
//     heroSubtitle: {
//         fontSize: '20px',
//         opacity: 0.9,
//         maxWidth: '600px',
//         margin: '0 auto',
//     },
//     // General Section
//     section: {
//         padding: '60px 20px',
//         maxWidth: '1000px',
//         margin: '0 auto',
//         textAlign: 'center',
//     },
//     sectionTitle: {
//         fontSize: '36px',
//         fontWeight: '600',
//         color: '#6b48ff',
//         marginBottom: '30px',
//     },
//     sectionText: {
//         fontSize: '18px',
//         lineHeight: '1.8',
//         color: '#555',
//         maxWidth: '700px',
//         margin: '0 auto',
//     },
//     // Team Section
//     teamGrid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//         gap: '30px',
//         marginTop: '40px',
//     },
//     teamCard: {
//         backgroundColor: '#fff',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         transition: 'transform 0.3s ease',
//         cursor: 'pointer',
//         ':hover': {
//             transform: 'translateY(-10px)', // Note: Inline CSS doesn't support :hover; use CSS file or styled-components for this
//         },
//     },
//     teamImage: {
//         width: '100px',
//         height: '100px',
//         backgroundColor: '#ddd',
//         borderRadius: '50%',
//         margin: '0 auto 15px',
//         // Replace with actual image: backgroundImage: 'url(/path-to-image.jpg)',
//     },
//     teamName: {
//         fontSize: '20px',
//         fontWeight: '500',
//         marginBottom: '5px',
//     },
//     teamRole: {
//         fontSize: '16px',
//         color: '#888',
//     },
//     // CTA Section
//     ctaSection: {
//         backgroundColor: '#6b48ff',
//         padding: '60px 20px',
//         textAlign: 'center',
//         color: '#fff',
//     },
//     ctaTitle: {
//         fontSize: '32px',
//         fontWeight: '600',
//         marginBottom: '20px',
//     },
//     ctaText: {
//         fontSize: '18px',
//         marginBottom: '30px',
//         opacity: 0.9,
//     },
//     ctaButton: {
//         backgroundColor: '#fff',
//         color: '#6b48ff',
//         padding: '12px 30px',
//         border: 'none',
//         borderRadius: '25px',
//         fontSize: '16px',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease',
//         ':hover': {
//             backgroundColor: '#f0f0f0', // Use CSS file for hover effects
//         },
//     },
// };

export default AboutUs;