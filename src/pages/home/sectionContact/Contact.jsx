import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
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
  return (
    <section className="section-cta">
      <div className="div-cta">
        <h1>Let's work together</h1>
        <Typography component={"span"}>
          Let's collaborate and achieve great results together. Feel free to
          reach out if you're looking for a developer or just want to connect.
        </Typography>
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <ContactForm />
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={150}
          className="cta__img--grid"
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
    img: "https://res.cloudinary.com/devwm/image/upload/v1673995862/portofolio/zgkvikbwqubttrkmnou7.jpg",
    title: "Developer",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/devwm/image/upload/v1671228218/portofolio/xe9sndhxnft0nmb2lrui.jpg",
    title: "Laptop",
  },
  {
    img: "https://res.cloudinary.com/devwm/image/upload/v1671229639/portofolio/feviiib0rv73yyyomdrn.jpg",
    title: "Turn ideas into reality",
  },
  {
    img: "https://res.cloudinary.com/devwm/image/upload/v1671229512/portofolio/knqwj9sqjqhzxnhsyd58.jpg",
    title: "Coffee",
    cols: 2,
  },
];

export default Contact;
