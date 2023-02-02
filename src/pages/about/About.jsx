import React from "react";
import "./about.css";
import Footer from "../../components/footer/Footer";
import darkSignature from "../../assets/about/dark-signature.png";
import lightSignature from "../../assets/about/light-signature.png";

function About({ theme }) {
  const { mode } = theme.palette;

  const signature = () => {
    if (mode === "light") {
      return <img src={darkSignature} className="logo_footer" />;
    }
    if (mode === "dark") {
      return <img src={lightSignature} className="logo_footer" />;
    }
  };
  return (
    <>
      <main>
        <div className="about-page">
          <figure>
            <img
              src="https://res.cloudinary.com/dc0yka6eb/image/upload/v1673964995/portofolio/oyqkkvb2z6houvc4jmkp.jpg"
              alt=""
              className="about-image"
            />
          </figure>
          <h1>HI, I'M WALBER MELO!</h1>
          <div>
            <p>
              I am a web designer and developer who is fascinated by how
              technology improves people's lives and transform our society. I am
              a goal-oriented person who does not hesitate to make an extra
              effort to accomplish a task or challenge. I believe that active
              listening and communication are essential for effective
              collaboration. I am very engaged in working alongside senior
              designers and developers who will raise my standards to what is
              expected of any web application.
            </p>
            <p>
              My journey with programming began when I was 12, but it didn't
              last long. At my school, we had some computer classes, but at that
              time we did not have access to the vast variety of learning
              methods that are available today. I am glad that today we have
              wonderful tools to encourage and smoothly introduce everyone to
              the beautiful world of programming at any age.
            </p>
            <p>
              Years later, at university, I had contact with programming. Due to
              my passion for nature, I ended up completing my first degree in
              Natural Sciences, through which I had the opportunity to learn
              about fields like mathematics and logic. The degree definitely
              gave me problem-solving, hypothesis testing, and self-learning
              skills. Later on, I had the opportunity to improve and expand
              those concepts to web development field by completing a master's
              degree in software development. I recently graduated from the
              Assembler Institute of Technology in Barcelona. The program
              focused on collaborative work simulating a real-world scenario
              where we created many projects from scratch using the latest
              technologies.
            </p>
            <p>
              Before to be a developer, I worked as an IT technical support for
              5 years which gave me a lot of experience working in the sector.
              Right now, I am seeking a full-time role where I can help a
              company achieve its goals and work alongside senior designers and
              developers who will raise my standards to what is expected of any
              web application.
            </p>
          </div>
        </div>
        <figure className="signature">{signature()}</figure>
        <Footer theme={mode} />
      </main>
    </>
  );
}

export default About;
