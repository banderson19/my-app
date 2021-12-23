import React from 'react';

const Form = () => {
    return (
        <div>
        <section>
            <div className="form">
              <h3>Get A Free Quote Today</h3>
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
                  <input type="radio" name="trainer-confirm" id="trainer-yes" />
                  <label for="trainer-yes">Yes</label>
                  <input type="radio" name="trainer-confirm" id="trainer-no" />
                  <label for="trainer-no">No</label>
                </p>
                
                <button type="submit">
                  Get quote!
                </button>
              </form>
            </div>
          
          </section>
        </div>
       
    )
}

export default Form;