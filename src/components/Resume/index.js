import React from "react";
import resume1 from "../../assets/resume.pdf"

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div className="contenttext">
      <div>
        <div class="mt-5">
          <h2 className="top-title">Sorna Kesavan</h2>
          <ul>
            <li>
              Core competencies in full-stack web development and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/sorna-alagappan/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href={resume1}
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <div id="front-back" class="mt-3">
                <h5><b>Front End Experience</b></h5>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h5><b>Back End Experience</b></h5>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
          
        </div>
      </div>
    </div>

    </section>
  );
}

export default Resume;
