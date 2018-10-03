import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    toast.error('There is something wrong :S', { position: toast.POSITION.BOTTOM_RIGHT });
  }

  render() {
    return (
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
              <p>The best way to contact me is by email, so feel free to write me an email,
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
                <form onSubmit={this.handleFormSubmit} id="contactForm">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name*"
                      value={this.state.firstName}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name*"
                      value={this.state.lastName}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                      value={this.state.email}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={this.state.subject}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      rows={1}
                      id="message"
                      name="message"
                      placeholder="Write Message"
                      value={this.state.message}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <button className="btn btn-default contact_btn" type="submit">
                      <span>Send Massage</span>
                    </button>
                  </div>
                </form>
                <ToastContainer autoClose={5000} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
