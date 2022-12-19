import React, { useState } from "react";
import "./contact.css";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Contact() {
  const [characterCount, setCharacterCount] = useState(0);

  const countCommentsLetter = () => {};
  return (
    <section className="section-cta">
      <div className="div-cta">
        <h1>Let's work together</h1>
        <Typography component={"span"}>
          Feel free to reach out if you're looking for a developer. have any
          question, or just want to connect.
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="div-cta--form">
          <form className="cta-form" name="contact-me" netlify="true">
            <div>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                id="full-name"
                name="full-name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="me@example.com"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Your comments</label>
              <textarea
                id="message"
                name="txtname"
                rows="4"
                cols="50"
                maxLength="300"
                placeholder="Leave your message"
                onChange={(e) => setCharacterCount(e.target.value.length)}
              ></textarea>
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
            <button className="btn-send" role="button">
              Send
            </button>
          </form>
        </div>
        <ImageList
          sx={{ width: 600, height: 305 }}
          variant="quilted"
          cols={4}
          rowHeight={150}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  );
}
const itemData = [
  {
    img: "https://res.cloudinary.com/dc0yka6eb/image/upload/v1671228184/portofolio/tqygvtcknqwxof77acj7.jpg",
    title: "Developer",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dc0yka6eb/image/upload/v1671228218/portofolio/xe9sndhxnft0nmb2lrui.jpg",
    title: "Laptop",
  },
  {
    img: "https://res.cloudinary.com/dc0yka6eb/image/upload/v1671229639/portofolio/feviiib0rv73yyyomdrn.jpg",
    title: "Turn ideas into reality",
  },
  {
    img: "https://res.cloudinary.com/dc0yka6eb/image/upload/v1671229512/portofolio/knqwj9sqjqhzxnhsyd58.jpg",
    title: "Coffee",
    cols: 2,
  },
];

export default Contact;
