import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="myskill_area pad" id="skill">
    <div className="main_title">
      <h2>Current Technology Stack</h2>
    </div>
    <div className="row">
      <div className="skill_text">
        <h4>Current Technology Stack</h4>
        <p>This is a list of my current stack this means that I am currently using this
          technologies in my job and side projects, There are some other technologies where
          I have more experience like Java, If you want to know more about those technologies,
          just send me a message :).
        </p>
      </div>
      <div className="col-md-6 wow fadeInUp animated">
        <div className="skill_item_inner">
          <div className="single_skill">
            <h4>Javascript</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Advanced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>React</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Advanced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>Redux</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Proficient</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>Node</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Advanced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>Jest</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Familiar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 wow fadeInUp animated">
        <div className="skill_item_inner">
          <div className="single_skill">
            <h4>HTML5</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Advanced</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>CSS3</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Proficient</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>MongoDB</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Proficient</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>Webpack</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Proficient</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_skill">
            <h4>Mocha</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress_parcent">
                  <span className="counter">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
