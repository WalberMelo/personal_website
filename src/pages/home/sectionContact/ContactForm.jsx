// import React, { useState } from "react";
// import "./contact.css";
// import { useForm, ValidationError } from "@formspree/react";
// import { Typography } from "@mui/material";

// export default function ContactForm() {
//   const [characterCount, setCharacterCount] = useState(0);

//   const [state, handleSubmit] = useForm("mnqynzya");
//   if (state.succeeded) {
//     return <p>Thank you, your message has been submitted.</p>;
//   }
//   return (
//     <div className="div-cta--form">
//       <form className="cta-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Full Name</label>
//           <input id="name" type="text" name="name" />
//           <ValidationError
//             prefix="Full Name"
//             field="name"
//             errors={state.errors}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email Address</label>
//           <input id="email" type="email" name="email" />
//           <ValidationError prefix="Email" field="email" errors={state.errors} />
//         </div>
//         <div>
//           <label htmlFor="message">Leave your message</label>
//           <textarea
//             id="message"
//             name="message"
//             onChange={(e) => setCharacterCount(e.target.value.length)}
//             rows="4"
//             cols="50"
//             maxLength="300"
//           />
//           <ValidationError
//             prefix="Message"
//             field="message"
//             errors={state.errors}
//           />
//           <Typography
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               color: "inherit",
//             }}
//           >
//             {characterCount}/300
//           </Typography>
//         </div>
//         <button className="btn-send" type="submit" disabled={state.submitting}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { Typography } from "@mui/material";
// import ReCAPTCHA from "react-google-recaptcha";

// export default function ContactForm() {
//   const [characterCount, setCharacterCount] = useState(0);
//   const [recaptchaValue, setRecaptchaValue] = useState(null);
//   const [state, handleSubmit] = useForm("mnqynzya");

//   // Handle reCAPTCHA change
//   const handleRecaptchaChange = (value) => {
//     setRecaptchaValue(value); // Store the reCAPTCHA token value
//   };

//   if (state.succeeded) {
//     return <p>Thank you, your message has been submitted.</p>;
//   }

//   return (
//     <div className="div-cta--form">
//       <form className="cta-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Full Name</label>
//           <input id="name" type="text" name="name" />
//           <ValidationError
//             prefix="Full Name"
//             field="name"
//             errors={state.errors}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email Address</label>
//           <input id="email" type="email" name="email" />
//           <ValidationError prefix="Email" field="email" errors={state.errors} />
//         </div>
//         <div>
//           <label htmlFor="message">Leave your message</label>
//           <textarea
//             id="message"
//             name="message"
//             onChange={(e) => setCharacterCount(e.target.value.length)}
//             rows="4"
//             cols="50"
//             maxLength="300"
//           />
//           <ValidationError
//             prefix="Message"
//             field="message"
//             errors={state.errors}
//           />
//           <Typography
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               color: "inherit",
//             }}
//           >
//             {characterCount}/300
//           </Typography>
//         </div>

//         {/* Add reCAPTCHA */}
//         <ReCAPTCHA
//           sitekey="6LecpVMqAAAAALPhlE98uVx_dl2gIwSJMzQIi9Ui" // Replace with your actual site key
//           onChange={handleRecaptchaChange}
//         />

//         <button
//           className="btn-send"
//           type="submit"
//           disabled={state.submitting || !recaptchaValue} // Disable submit if reCAPTCHA isn't completed
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [characterCount, setCharacterCount] = useState(0);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [state, handleSubmit] = useForm("mnqynzya");

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Store the reCAPTCHA token value
  };

  // Custom form submit handler to include reCAPTCHA token
  const customHandleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // Append the reCAPTCHA token to the form data
    const formData = new FormData(e.target);
    formData.append("g-recaptcha-response", recaptchaValue);

    // Make the form POST request with Formspree
    await handleSubmit(formData);
  };

  if (state.succeeded) {
    return <p>Thank you, your message has been submitted.</p>;
  }

  return (
    <div className="div-cta--form">
      <form className="cta-form" method="POST" onSubmit={customHandleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" name="name" required />
          <ValidationError
            prefix="Full Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
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
            required
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

        {/* Add reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LecpVMqAAAAALPhlE98uVx_dl2gIwSJMzQIi9Ui" // Replace with your actual site key
          onChange={handleRecaptchaChange}
        />

        <button
          className="btn-send"
          type="submit"
          disabled={state.submitting || !recaptchaValue} // Disable submit if reCAPTCHA isn't completed
        >
          Submit
        </button>
      </form>
    </div>
  );
}
