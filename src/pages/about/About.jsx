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
              src="https://res.cloudinary.com/devwm/image/upload/v1673964995/portofolio/oyqkkvb2z6houvc4jmkp.jpg"
              alt=""
              className="about-image"
            />
          </figure>
          <h1>HI, I'M WALBER MELO!</h1>
          <div>
            <p>
              I am a developer who is fascinated by how technology can improve
              people's live and transform our society. I describe myself as
              open-minded which adapt well to new situations, also often coming
              up with innovative ideas. I like to learn through experience and
              deal with problems by diving right in. Also, I enjoy meeting new
              people, making contacts and help my network. I am a goal-oriented
              person who does not hesitate to make an extra effort to accomplish
              any task or challenge. I believe that active listening and
              communication are essential for effective collaboration.
            </p>
            <p>
              I worked for many years as an IT technical support before starting
              my developer journey. Those years gave me a lot of experience
              working alongside multicultural teams and following standard
              approaches applied in the sector. Fortunately, I had the
              opportunity to expand my skills in the development area by
              completing a master's degree in software development. The degree
              definitely provided me with the solid fundamentals necessary to
              build modern applications, thanks to its collaborative work
              methodology where we simulated real-world scenarios and created
              several projects from scratch using the latest technologies and
              techniques.
            </p>
            <p>
              Ultimately, my goal is to produce work that is consistently strong
              and deserving of recognition. I take pride in my achievements and
              the quality of my work. Through self-confidence, determination,
              and a competitive spirit, I strive to reach new heights and make a
              lasting impact in my field.
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
