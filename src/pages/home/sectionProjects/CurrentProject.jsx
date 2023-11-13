import React from "react";

function CurrentProject() {
  return (
    <section className="section-current-project">
      <div className="current__project">
        <img
          src="https://res.cloudinary.com/devwm/image/upload/v1699873911/portofolio/j4vonqdmspyxrtzknyhh.png"
          alt="current project resume wizard"
          className="current__project--img"
        />
        <h2>Resume Wizards</h2>
        <p>
          My current work in progress help users to create beautiful resumes for
          free.
        </p>
        <p className="current__project--soon">COMING SOON</p>
      </div>
    </section>
  );
}

export default CurrentProject;
