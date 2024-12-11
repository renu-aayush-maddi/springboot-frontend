
import"./contact.css"
import React from 'react';
import theme_pattern from '../components/assets/theme_pattern.svg';
import mail from '../components/assets/mail_icon.svg';
import location from '../components/assets/location_icon.svg';
import call from '../components/assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e5a82009-25cd-4e4f-96cb-50df703d0933");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset(); // Clear the form fields immediately
      setTimeout(() => {
        alert("Message sent successfully!"); // Alert message after a short delay
      }, 100); // Delay for 100 milliseconds (0.1 seconds)
    }
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Contact Us</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>You Can Contact Us For Any Kind Of Information</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>renuaayushm@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 9396763455</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Guntur, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label htmlFor=''>E-mail</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label htmlFor=''>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
