import React from 'react';

const Skills = () => (
  <section className="myskill_area pad" id="skill">
    <div className="main_title">
      <h2>Current Technology Stack</h2>
    </div>
    <div className="row">
      <div className="col-md-6 wow fadeInUp animated">
        <div className="skill_text">
          <h4>Current Technology Stack</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Loren Ipsum has been the industrys standard dummy text.
          </p>
        </div>
        <div className="skill_item_inner">
          <div className="single_skill">
            <h4>Javascript</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">85</span>%
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
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">65</span>%
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
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">75</span>%
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
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">95</span>%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 wow fadeInUp animated">
        <div className="skill_text">
          <h4>Web Design Skills</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Loren Ipsum has been the industry standard dummy text.
          </p>
        </div>
        <div className="skill_item_inner">
          <div className="single_skill">
            <h4>HTML5</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">85</span>%
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
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">65</span>%
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
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">75</span>%
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
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress_parcent">
                  <span className="counter">95</span>%
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
