import React from "react";
import Nav from "pages/Navbar/Nav";
import Header from "pages/Header/Header";
import Team from "pages/Team/Team";
import Contact from "pages/Contact/Contact";
import Footer from "pages/Footer/Footer";

const Main = () => {
  return (
    <section className="main">
      <Nav />
      <Header />
      <Team />
      <Contact />
      <Footer />
    </section>
  );
};

export default Main;
