import React, { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import emailjs from '@emailjs/browser';
import './review.css';

const Review = (props) => {
    const [value, setValue] = useState(0);
    const reviews = [
        {
            id: 1,
            name: 'Susan Smith',
            comment: 'Swift Holiday lighting does a fantastic job',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Jessica Park',
            comment: 'I love my lights',
            rating: 4
        },
        {
            id: 3,
            name: 'Wendy Barlow',
            comment: 'I wanted warm white, but he gave me pure. I made him come back and change all the lights to the correct color',
            rating: 1.5
        },
        {
            id: 4,
            name: 'Mike Anderson',
            comment: 'my brother does a great job',
            rating: 5
        },
        {
            id: 5,
            name: 'John Smith',
            comment: 'he does a fantastic job',
            rating: 5
        }
    ]
    console.log(reviews)
    const getReviewRating = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = reviews.map(review => review.rating)
        const avgRating = ratingsArr.reduce(sum) / ratingsArr.length;
        return avgRating
    }
    getReviewRating();

    const reviewForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fq20s67', 'template_h3aodbb', reviewForm.current, 'user_quMpabUl8g3DFCCR8Dwln')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const frm = document.getElementsByName('review-form')[0];
        frm.reset();
    };
    return (
        <section id='review' className='reviewSection container'>
            <div className="avgRating">
                {/* average rating */}
                <h3>What do our clients have to say?</h3>
                <hr></hr>
                    <Rating
                        value={getReviewRating()}
                        name="rating"
                        size="large"
                        precision={0.5}
                        readOnly="true"            
                        /> 
                    {/* set customer rating */}
                <hr></hr>
            </div>
          
            <div className="review">
                <h3>Write a review</h3>
                <form ref={reviewForm} name="review-form" onSubmit={sendEmail}>
                    <input for="reviewers_name" type="text" placeholder="Your Name" name="reviewers_name" id="reviewers_name" className="form-input"/>
                    <div>
                        <p>remain anonymous
                            <br></br>  
                            <input type="radio" name="anonymous-yes" id="anonymous-yes" />
                            <label for="anonymous-yes">Yes</label>
                            <input type="radio" name="anonymous-no" id="anonymous-no" />
                            <label for="anonymous-no">No</label>
                        </p>
                    </div>
                    <div>
                        <p>
                            Rate your experience
                        <Rating
                            value={value}
                            name="reviewers_rating"
                            size="large"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                console.log(newValue);
                            }}
                            onClick={props.handInputChange}
                            for='reviewers_rating'
                            />

                        </p>
                    </div>
                    <label >Write your review  here</label>
                    <textarea type="textarea" row="5" placeholder="Your review" name="reviewers_review" id="reviewers_review" className="form-input"/>
                    <button className="reviewButton" variant="secondary" type="submit">Submit Review</button>
                </form>
            </div>
            
            {/* display reveiws */}
            <div className="reviews">
                {reviews.map(review => (
                    <div className="reviewCard">
                            <h3>{review.name}</h3>
                            <h6>{review.comment}</h6>
                            <Rating
                            value={review.rating}
                            name="rating"
                            size="small"
                            precision={0.5}
                            readOnly="true" 
                            /> 
                    </div>
                ))}
            </div>
            <br></br>
        </section>  
    )
}

export default Review;