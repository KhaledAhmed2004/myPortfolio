import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MyProjects from "./components/myProjects/MyProjects";
import MySkills from "./components/mySkills/MySkills";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
