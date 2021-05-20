import React from "react";
import Nav from "Sections/Navbar/Nav";
import Header from "Sections/Header/Header";
import Team from "Sections/Team/Team";
import Contact from "Sections/Contact/Contact";
import Footer from "Sections/Footer/Footer";

function Main() {
  return (
    <section className="main">
      <Nav />
      <Header />
      <Team />
      <Contact />
      <Footer />
    </section>
  );
}
export default Main;
