import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education_area pad" id="education">
    <div className="main_title">
      <h2>Education</h2>
    </div>
    <div className="education_inner_area">
      <div className="education_item wow fadeInUp animated">
        <h6>2015</h6>
        <div>
          <h4>Goethe Institut</h4>
        </div>
        <h5>B1.2 Gemeinsamer Europäischer Referenzrahmen</h5>
      </div>
      <div className="education_item wow fadeInUp animated">
        <h6>2014</h6>
        <div>
          <h4>MongoDB University</h4>
        </div>
        <h5>M101P: MongoDB for Developers.</h5>
      </div>
      <div className="education_item wow fadeInUp animated">
        <h6>2011</h6>
        <div>
          <h4>Oracle</h4>
        </div>
        <h5>Oracle Certified Professional Java EE 5 Web Component Developer.</h5>
      </div>
      <div className="education_item wow fadeInUp animated">
        <h6>2010</h6>
        <div>
          <h4>Oracle</h4>
        </div>
        <h5>Oracle Certified Professional Java SE 6 Programmer.</h5>
      </div>
      <div className="education_item wow fadeInUp animated">
        <h6>Jul 2003 - Nov 2010</h6>
        <div>
          <h4>Systems Engineer</h4>
        </div>
        <h5>Fundacion Universitaria San Martin</h5>
        <p>Got best GPA.
        </p>
      </div>
    </div>
  </section>
);

export default Education;
