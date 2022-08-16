import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_iihrfto",
        "template_gichxvc",
        form.current,
        "CXSpSQQ8ZouEfeKb5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
      <div className="contact" id="contact">
        <h1 className="text-clr display-4 text-center fw-bolder text-capitalize my-5">
          contact me
        </h1>

        <div className="contact-page d-flex justify-content-center gap-5 ">
          <div className="c-left">
            <div className="awesome d-flex flex-column justify-content-center align-items-end ">
              <span className="contact-heading heading-black mr-5">
                get in touch
              </span>
              <span className="contact-heading heading-blue mr-5">
                contact me
              </span>
            </div>
          </div>

          <div className="c-right d-flex flex-column  align-items-center">
            <form
              className="d-flex flex-column gap-5 contact-form "
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="user"
                type="text"
                name="user_name"
                placeholder="name"
              />
              <input
                className="user"
                type="email"
                name="user_email"
                placeholder="email"
              />
              <textarea
                className="user"
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="message"
              />
              <input type="submit" value="send" className="btn btn-lg " />      </form>
          </div>
        </div>

        <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
        
        </div>
      </div>
  
  );
}

export default Contact;
