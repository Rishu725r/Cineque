import React, { useState } from "react";
import Sidenav from "./templates/Sidenav";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Sidenav />
      <div className="w-full min-h-screen  flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
