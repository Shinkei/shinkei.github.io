import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact_area pad" id="contact">
    <div className="main_title">
      <h2>Contact Me</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="left_contact_details wow fadeInUp animated">
          <div className="contact_title">
            <h3>Want to Talk?</h3>
          </div>
          <p>The best way to cantact me is by email, so feel free to write me an email,
             or write a message here, I will check it by sure.
          </p>
          <div className="media">
            <div className="media-left">
              <i className="fa fa-envelope-o" />
            </div>
            <div className="media-body">
              <h4>Email</h4>
              <p>ing.jorgeivanramirezh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact_from_area wow fadeInUp animated">
          <div className="contact_title">
            <h3>Send Me a Message</h3>
          </div>
          <div className="row">
            <form method="post" id="contactForm">
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="First Name*"
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="last"
                  id="last"
                  placeholder="Last Name*"
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email*"
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group col-md-12">
                <textarea
                  className="form-control"
                  rows={1}
                  id="message"
                  name="message"
                  placeholder="Write Message"
                />
              </div>
              <div className="form-group col-md-12">
                <button className="btn btn-default contact_btn" type="submit">
                  <span>Send Massage</span>
                </button>
              </div>
            </form>
            <div id="success">
              <p>Your text message sent successfully!</p>
            </div>
            <div id="error">
              <p>Sorry! Message not sent. Something went wrong!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
