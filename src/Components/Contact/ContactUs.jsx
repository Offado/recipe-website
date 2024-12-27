import React from "react";
import "./contact.css";
import Header from "../Header/Header";
import FooterPage from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact-head">
        <Header />
      </div>
      <section id="contact" className="section-contact">
        Contact
      </section>
      <div className="contact-footer">
        <FooterPage />
      </div>
    </div>
  );
};

export default Contact;
