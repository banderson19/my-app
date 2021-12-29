import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

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
    return (
        <section id='review' className='reviewSection'>
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
                <form>
                    <input type="text" placeholder="Your Name" name="name" id="name" className="form-input"/>
                    <div style={{"display": "flex"}}>
                        <p style={{"marginRight": "5px"}}>remain anonymous  </p>
                        <input type="radio" name="anonymous-confirm" id="anonymous-yes" />
                        <label for="anonymous-yes">Yes</label>
                        <input type="radio" name="anonymous-confirm" id="anonymous-no" />
                        <label for="anonymous-no">No</label>
                    </div>
                    <div style={{"display": "flex"}}>
                        <p style={{"marginRight": "5px"}}>Rate your experience</p>
                        <Rating
                            value={value}
                            name="rating"
                            size="large"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onClick={props.handInputChange}
                            /> 
                    </div>
                    <br></br>
                    <label for="review">Write your review  here</label>
                    <input type="text" placeholder="Your review" name="review" id="review" className="form-input"/>
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