import React from "react";
import "./about.css";
import Footer from "../../components/footer/Footer";
import darkSignature from "../../assets/about/dark-signature.png";
import lightSignature from "../../assets/about/light-signature.png";
import { Helmet } from "react-helmet-async";

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
    <div>
      <Helmet>
        <title>About Walber Melo</title>
        <meta
          name="description"
          content="Learn more about Walber Melo, a Full Stack Developer with expertise in JavaScript, TypeScript, Python, and AI integration."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, About Walber Melo, LLM optimization, AI integration"
        />
      </Helmet>
      <main>
        <div className="about-page">
          <figure>
            <img
              src="https://res.cloudinary.com/devwm/image/upload/c_scale,w_493/v1722593575/portofolio/puuwgqgvb06w7y5nizbc.jpg"
              alt="Walber Melo"
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
              any task or challenge. I possess strong active listening and
              communication skills, enabling me to effectively collaborate in
              team environments.
            </p>
            <p>
              I worked for many years as IT technical support before starting my
              developer journey. Those years gave me a lot of experience working
              alongside multicultural teams and following standard approaches
              applied in the sector. With this background, I took the decisions
              to expand my knowledge in the development area by completing a
              master's degree in software development. The program equipped me
              with a strong foundation necessary to build modern applications
              with a collaborative work methodology simulating real-world
              challenges using the latest technologies and techniques.
            </p>
            <p>
              My goal is to produce work that is consistently strong and
              deserving of recognition. I take pride in my achievements and the
              quality of my work. Through self-confidence, determination, and
              motivation, I strive to reach new heights and make a lasting
              impact in my field.
            </p>
          </div>
        </div>
        <figure className="signature">{signature()}</figure>
        <Footer theme={mode} />
      </main>
    </div>
  );
}

export default About;
