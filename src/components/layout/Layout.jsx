import Banner from "./banner/Banner";
import Certification from "./banner/Certification";
import CoursesSection from "./banner/CourseSection";
import FaqSection from "./banner/FaqSection";
import FeaturesSection from "./banner/FeatureSection";
import FeaturesSectionOffline from "./banner/FeatureSectionOffline";
import Highlight from "./banner/Highlight";
import TestimonialCard from "./banner/TestimonialCard";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div style={{ width: "100%", overflowY: "auto" }}>
        <Navbar />
        <Banner />
        <Highlight />
        <FeaturesSection />
        <FeaturesSectionOffline />
        <CoursesSection />
        {/* <Certification /> */}
        <TestimonialCard/>
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
