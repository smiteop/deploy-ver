import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Forms from "./components/layout/registration/Forms";
// import Tutors from "./components/layout/Tutors/Tutors";
import ContactUs from "./components/layout/ContactUs/ContactUs";
import AboutUs from "./components/layout/AboutUs/AboutUs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Forms />} />
        {/* <Route path="/tutors" element={<Tutors />} /> */}
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />

      </Routes>
      {/* <ScrollableSections/> */}
    </>
  );
}

export default App;
