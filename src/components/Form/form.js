import React from 'react';

const Form = () => {
    return (
        <div>

<section class="hero">
    <div class="hero-form">
      <h3>Get Started Today</h3>
      <p>Fill out this form and we'll get back to you with in 24 hours</p>
      <form>
        <label for="name">Enter full name:</label>
        <input type="text" placeholder="Your Name" name="name" id="name" class="form-input" />
        <label for="email">Enter email address:</label>
        <input type="text" placeholder="Email Address" name="email" id="email" class="form-input" />
        <label for="phone">Enter a telephone number:</label>
        <input type="text" placeholder="Phone Number" name="phone" id="phone" class="form-input" />
        <p>
          Do you currently own your own set of christmas lights?
          <input type="radio" name="trainer-confirm" id="trainer-yes" />
          <label for="trainer-yes">Yes</label>
          <input type="radio" name="trainer-confirm" id="trainer-no" />
          <label for="trainer-no">No</label>
        </p>
        <p>
          <label for="checkbox">
            I acknowledge that I am at least 18 years of age.
          </label>
          <input type="checkbox" name="checkpoint1" id="checkbox" />
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