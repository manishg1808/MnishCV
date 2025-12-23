import React from 'react';

const Contact = ({ showContact }) => {
  return (
    <section className={`contact-info ${showContact ? 'show' : ''}`}>
      <div className="contact-grid">
        <div className="contact-grid-item">
          <span><i className="ri-mail-fill"></i> Email:</span>
          <a href="mailto:mnishg49@gmail.com" className="contact-link">mnishg49@gmail.com</a>
        </div>
        <div className="contact-grid-item">
          <span><i className="ri-phone-fill"></i> Phone:</span>
          <a href="tel:+917088902840" className="contact-link">+91 7088902840</a>
        </div>
        <div className="contact-grid-item">
          <span><i className="ri-linkedin-box-fill"></i> LinkedIn:</span>
          <a href="https://www.linkedin.com/in/er-mnish-kumar-8227572b8/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/er-mnish-kumar-8227572b8/</a>
        </div>
        <div className="contact-grid-item">
          <span><i className="ri-github-fill"></i> GitHub:</span>
          <a href="https://github.com/manishg1808/" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/manishg1808/</a>
        </div>
        <div className="contact-grid-item">
          <span><i className="ri-map-pin-fill"></i> Location:</span>
          <p>Ghaziabad, Uttar Pradesh, India</p>
        </div>
        <div className="contact-grid-item">
          <span><i className="ri-briefcase-fill"></i> Portfolio:</span>
          <a href="https://manish-kumar-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="contact-link">manish-kumar-portfolio.netlify.app</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
