import "./App.css";
import HomePage from "./components/Home.page";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/About.page";
import NavBar from "./components/Navbar";
import ServicesPage from "./components/Services.page";
import ContactPage from "./components/Contact.Page";
import CareersPage from "./components/Careers.page";
import TopBar from "./components/TopBar";
import FooterPage from "./components/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <FooterPage />
    </>
  );
};

export default App;
