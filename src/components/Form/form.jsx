import React, { useState } from 'react';
import './form.css';
import Modal from 'react-bootstrap/Modal'

const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section id='form'>
        <div className="contactHeader">
          <h3>(801) 694 - 2493</h3>
          <h3>service@swiftholidaylighting.com</h3>
        </div>
        <div className="contactButton">
          <button variant="primary" onClick={handleShow}>
            Request a quote
          </button>
        </div>
        </section>
        <Modal 
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="formHeader" closeButton>
            <Modal.Title>Get in contact with us</Modal.Title>
          </Modal.Header>
          <Modal.Body className="form">
            <div>
              <p>Fill out this form and we'll get back to you with in 24 hours</p>
              <form>
                <label for="name">Enter full name:</label>
                <input type="text" placeholder="Your Name" name="name" id="name" className="form-input" />
                <label for="email">Enter email address:</label>
                <input type="text" placeholder="Email Address" name="email" id="email" className="form-input" />
                <label for="phone">Enter a telephone number:</label>
                <input type="text" placeholder="Phone Number" name="phone" id="phone" className="form-input" />
                <p>
                  Do you currently own your own set of christmas lights?
                  <br></br>
                  <input type="radio" name="lights-confirm" id="trainer-yes" />
                  <label for="lights-yes">Yes</label>
                  <input type="radio" name="lights-confirm" id="trainer-no" />
                  <label for="lights-no">No</label>
                </p>

                <button type="submit">
                  Get quote!
                </button>
                <button variant="secondary" onClick={handleClose}>
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