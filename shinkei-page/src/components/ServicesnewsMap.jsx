import React from 'react';
import './ServicesnewsMap.css';

const ServicesNewsMap = () => (
  <div>
    <section className="myskill_area pad" id="skill">
      <div className="main_title">
        <h2>My Skill</h2>
      </div>
      <div className="row">
        <div className="col-md-6 wow fadeInUp animated">
          <div className="skill_text">
            <h4>Web development Skills</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
          <div className="skill_item_inner">
            <div className="single_skill">
              <h4>Wordpress</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">85</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>Php & MySQL</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">65</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>Html & Css</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">75</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>JavaScript</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
          <div className="skill_item_inner">
            <div className="single_skill">
              <h4>Creative Design</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">85</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>Photoshop</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">65</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>Illustrator</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress_parcent">
                    <span className="counter">75</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="single_skill">
              <h4>Photography</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
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
    <section className="service_area" id="service">
      <div className="main_title">
        <h2>SERVICES</h2>
      </div>
      <div className="service_inner row">
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-wordpress" aria-hidden="true" />
            <a href="#about">
              <h4>Wordpress Development</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-paint-brush" aria-hidden="true" />
            <a href="#about">
              <h4>Creative Design</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-mobile" aria-hidden="true" />
            <a href="#about">
              <h4>Mobile Apps Development</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-maxcdn" aria-hidden="true" />
            <a href="#about">
              <h4>Social Media Marketing</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-camera" aria-hidden="true" />
            <a href="#about">
              <h4>Professional Photography</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service_item wow fadeIn animated">
            <i className="fa fa-laptop" aria-hidden="true" />
            <a href="#about">
              <h4>Website Development</h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="news_area pad" id="news">
      <div className="main_title">
        <h2>News</h2>
      </div>
      <div className="news_inner_area">
        <div className="row">
          <div className="col-md-4">
            <div className="twitter_area wow fadeInLeft animated">
              <div className="w_title">
                <h3>
                  <i className="fa fa-twitter" />Twitter
                </h3>
              </div>
              <ul>
                <li>
                  <a href="#about">@themexart:</a> Lorem ipsum dolors sit
                </li>
                <li>
                  <a href="#about">@themexart:</a> Lorem ipsum dolors sit
                </li>
                <li>
                  <a href="#about">@themexart:</a> Lorem ipsum dolors sit
                </li>
                <li>
                  <a href="#about">@themexart:</a> Lorem ipsum dolors sit
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_slider_area wow fadeInUp animated">
              <div className="w_title">
                <h3>Blog</h3>
              </div>
              <div className="blog_slider_inner">
                <div className="item">
                  <img src="img/blog/blog-1.jpg" alt="" />
                  <a href="#about">
                    <h3>The Importance of User Experience</h3>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis...
                    <a href="#about">Read More</a>
                  </p>
                  <h5>Posted by
                    <a href="http://rocky.obaidul.com">Rocky</a> at 04 Feb, 2017
                  </h5>
                </div>
                <div className="item">
                  <img src="img/blog/blog-2.jpg" alt="" />
                  <a href="#about">
                    <h3>The Importance of User Experience</h3>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis...
                    <a href="#about">Read More</a>
                  </p>
                  <h5>Posted by
                    <a href="http://rocky.obaidul.com">Rocky</a> at 04 Feb, 2017
                  </h5>
                </div>
                <div className="item">
                  <img src="img/blog/blog-3.jpg" alt="" />
                  <a href="#about">
                    <h3>The Importance of User Experience</h3>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis...
                    <a href="#about">Read More</a>
                  </p>
                  <h5>Posted by
                    <a href="http://rocky.obaidul.com">Rocky</a> at 04 Feb, 2017
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="instagram_area wow fadeInRight animated">
              <div className="w_title">
                <h3>
                  <i className="fa fa-instagram" />Instagram
                </h3>
              </div>
              <ul>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-4.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-5.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-6.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-7.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-8.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <img src="img/instagram/instagram-9.jpg" alt="" />
                  </a>
                </li>
              </ul>
              <a className="follow_btn" href="#about">
                <i className="fa fa-instagram" /> Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      id="mapBox"
      className="mapBox row m0"
      data-lat="37.3818288"
      data-lon="-122.0658212"
      data-zoom="13"
    />

  </div>
);

export default ServicesNewsMap;
