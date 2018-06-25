import React from 'react';

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
          <p>There are many variations of passages of Lorem Ipsum available, but the et majori
            have suffered alteration in some form, by injected humour, Domised words which dont
            look even slightly believable. If you are going to use a pas of Lorem Ipsum, youn
            eed to be sure there isnt anything embarrassing hidden in the middle of text.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
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
            <form action="contact_process.php" method="post" id="contactForm">
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
