import React from 'react';

const Headline = () => (
  <section className="about_person_area pad" id="about">
    <div className="row">
      <div className="col-md-5">
        <div className="person_img">
          <img src="img/member/photo.jpg" alt="" />
          <a className="download_btn" href="#" >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
      <div className="col-md-7">
        <div className="row person_details">
          <h4>Full Stack Developer</h4>
          <p>Full stack developer, interested in new JavaScript technologies and passionated for
            learning and collaborate with the community, current collaborator in the Angular
            Medellin group and video game developer in the leisure time, nothing professional.

            During my career I have worked on various enterprise technology in different
            technologies and methodologies especially SCRUM and KANBAN, also I have worked in
            distributed teams and can coordinate tasks for team members in different locations to
            reach the deadlines with knowledge in TDD.
            I consider myself a very ordered person and a bit serious, but I really love learning
            new technologies, trekking and traveling.
          </p>
          <div className="person_information">
            <ul>
              <li>
                <span>Nationality</span>
              </li>
              <li>
                <span>Location</span>
              </li>
              <li>
                <span>Email</span>
              </li>
            </ul>
            <ul>
              <li>
                <p>Colombian</p>
              </li>
              <li>
                <p>Medellin, Colombia</p>
              </li>
              <li>
                <p>ing.jorgeivanramirezh@gmail.com</p>
              </li>
            </ul>
          </div>
          <ul className="social_icon">
            <li>
              <a href="https://www.linkedin.com/in/jorgeivanramirezh/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Shinkei1">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Shinkei">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/shinkei">
                <i className="fa fa-gitlab" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section >
);

export default Headline;
