import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { Typography } from "@mui/material";

export default function ContactForm() {
  const [characterCount, setCharacterCount] = useState(0);

  const [state, handleSubmit] = useForm("mnqynzya");
  if (state.succeeded) {
    return <p>Thank you, your message has been submitted.</p>;
  }
  return (
    <div className="div-cta--form">
      <form className="cta-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" name="name" />
          <ValidationError
            prefix="Full Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">Leave your message</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setCharacterCount(e.target.value.length)}
            rows="4"
            cols="50"
            maxLength="300"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: "inherit",
            }}
          >
            {characterCount}/300
          </Typography>
        </div>
        <button className="btn-send" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
