import React from "react";
import "plyr-react/dist/plyr.css";
import Header from "./Header/Header";
import Team from "./Content/Team";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Nav from "./Navbar/Nav";
import navMenu from "../data/navMenu";
import mainHeading from "../data/mainHeading";

const Main = () => {
  return (
    <section className="main">
      <Nav navMenu={navMenu}/>
      <Header mainHeading={mainHeading}/>
      <Team/>
      <Contact/>
      <Footer/>
    </section>
  );
};
export default Main;
