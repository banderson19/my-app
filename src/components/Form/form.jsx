import React, { useState, useRef } from 'react';
import './form.css';
import Modal from 'react-bootstrap/Modal'
import emailjs from '@emailjs/browser';

const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quoteForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fq20s67', 'template_h3aodbb', quoteForm.current, 'user_quMpabUl8g3DFCCR8Dwln')
        .then((result) => {
            console.log(result.text);
            console.log(result)
        }, (error) => {
            console.log(error.text);
        });
        const frm = document.getElementsByName('quote-form')[0];
        frm.reset();
      }

  return (
    <div>
      <section id='form'>
        <div className="contactButton">
          <button className="btn" onClick={handleShow}>
            Free Quote
          </button>
        </div>
        </section>
        <Modal 
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className="form">
            <div>
              <h3> Get in contact with us</h3>
              <p>Fill out this form and we'll get back to you with in 24 hours</p>
              <form ref={quoteForm} name='quote-form' onSubmit={sendEmail}>
                <label for="user_name">Enter full name:</label>
                <input type="text" id="name" name="user_name" placeholder="Your Name" className="form-input" />
                <label for="user_email">Enter email address:</label>
                <input type='text' id="name" name="user_email" placeholder="Email Address" name="user_email" id="user_email" className="form-input" />
                <label for="user_phone">Enter a telephone number:</label>
                <input name="user_phone" id="user_phone" placeholder="Phone Number" className="form-input" />
                <p>
                  Do you currently own your own set of christmas lights?
                  <br></br>
                  <input type="radio" name="lights_yes" id="trainer-yes" />
                  <label for="lights_yes">Yes</label>
                  <input type="radio" name="lights_no" id="trainer-no" />
                  <label for="lights_no">No</label>
                </p>

                <button type="submit" onClick={handleClose}>
                  Get quote!
                </button>
                <button variant="secondary" type="button" onClick={handleClose}>
                Close
                </button>
              </form>
            </div>
          </Modal.Body>
          
        </Modal>
    </div>
  )
}

export default Form;