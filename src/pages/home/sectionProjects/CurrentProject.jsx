import React from "react";

function CurrentProject() {
  return (
    <section className="section-current-project">
      <div className="current__project">
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1674058651/portofolio/oak5sb9iglzjxrxinygd.png"
          alt="current project"
          className="current__project--img"
        />
        <h2>Movie By Night</h2>
        <p>
          My current work in progress is a web application that helps people
          find movies and purchase them.
        </p>
        <p className="current__project--soon">COMING SOON</p>
      </div>
    </section>
  );
}

export default CurrentProject;
