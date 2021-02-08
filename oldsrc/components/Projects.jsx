import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="portfolio_area pad" id="portfolio">
    <div className="main_title">
      <h2>Projects</h2>
    </div>
    <div className="row">
      <div className="portfolio_list_inner">
        <div className="col-md-4 photo marketing">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/tomate.png" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://gitlab.com/shinkei/pomodoro">
                <h4>Pomodoro</h4>
              </a>
              <h5>Script to use the pomodoro technique through the terminal</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 design">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/firstaid.png" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://gitlab.com/manito/PhaserInit">
                <h4>PhaserInit</h4>
              </a>
              <h5>Little game made in phaser and package with webpack</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 photo marketing">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/natgeo.jpg" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://github.com/Ondama/hello_world">
                <h4>Natgeo Wallpaper</h4>
              </a>
              <h5>Little rust application that set as wallpaper the photo of the day of National Geographic site</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 design marketing">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/fire.jpg" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://github.com/Shinkei/angular-firebase-tutorial">
                <h4>Angular + Firebase 101</h4>
              </a>
              <h5>Angular and firebase tutorial for the angular medellin meetup comunity</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 photo">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/todo-app.png" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://github.com/Shinkei/todo-react">
                <h4>TODO React App</h4>
              </a>
              <h5>Todo application made in react and redux</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 marketing">
          <div className="portfolio_item">
            <div className="portfolio_img">
              <img src="img/portfolio/shinkei.png" alt="" width="315" height="280" />
            </div>
            <div className="portfolio_title">
              <a href="https://github.com/Shinkei">
                <h4>Check my other repositories</h4>
              </a>
              <h5>Check my other repositories in Gitlab and Github</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
