import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./contact.css";
import SocialMediaLinks from "./socialMedia.js";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

export function Contact() {
  const [state, handleSubmit] = useForm("xjvdpdbl");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="contact component"
    >
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p>Let's talk!</p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <div className="contact-intro">
          <h2>Contact</h2>
          <p>
            Got a problem to solve? Get your space suit ready and tell me your
            ideas to develop your dream application.
          </p>
        </div>
      </div>
      <SocialMediaLinks />
    </motion.div>
  );
}
