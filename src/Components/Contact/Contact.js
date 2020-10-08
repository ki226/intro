import React from "react";
import "./Contact.scss";
import contact from "../../Images/contact.jpg";

function Contact(props) {
  return (
    <div
      className={`${
        props.buttonColor.fourthButton ? "contact" : "contact-hide"
      }`}
    >
      <img className="contact-img" src={contact} alt="contact"></img>
      <div className="contact-content">
        <h3>Email : tkddn088@gmail.com</h3>
        <h3>Blog : http://velog.io/@ki226</h3>
        <h3>Github : https://github.com/ki226</h3>
        <h3>Mobile : 010-8546-3750</h3>
      </div>
    </div>
  );
}

export default Contact;
