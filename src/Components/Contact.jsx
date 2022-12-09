import React, { useState } from "react";
// import { IoMdContact } from 'react-icons/io'
// import { GrMail } from 'react-icons/gr'
// import { BsTextareaResize } from 'react-icons/bs'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    review: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = () => {
    setForm({
      name: "",
      mail: "",
      review: "",
    });
  };
  return (
    <>
      <h1 className="headingContact">
        CONTACT <span>US</span>
      </h1>
      <section className="heroContact" id="contact">
        <div className="boxContact">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="mail"
            value={form.mail}
            onChange={handleChange}
            placeholder="Enter your mail"
            required
          />
          <textarea
            name="review"
            id="contact_box"
            cols="30"
            rows="5"
            required
            placeholder="Review us"
            value={form.review}
            onChange={handleChange}
          ></textarea>
          <button className="btn" onClick={handleClick}>
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
