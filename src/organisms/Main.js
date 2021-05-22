import React from "react";
import Nav from "organisms/Navbar/Nav";
import Header from "organisms/Header/Header";
import Team from "organisms/Team/Team";
import Contact from "organisms/Contact/Contact";
import Footer from "organisms/Footer/Footer";

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
