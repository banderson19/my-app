import React, { useState } from 'react';
import Rating from '@mui/material/Rating';


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
        <div>
        <section>
            <div className="form">
            <div>
                <h3>What do our clients have to say?</h3>
                {/* average rating */}
                <div style={{display: "flex", flexDirection: "row"}}>
                    <h4>Avg Rating:</h4>
                    <Rating
                        value={getReviewRating()}
                        name="rating"
                        size="medium"
                        precision={0.5}
                        readOnly="true" 
                        style={{}}           
                        /> 
                    {/* set customer rating */}
                </div>
                <hr></hr>
                
            </div>
                <h3>Write a customer review</h3>
                <p>share with us your thoughts</p>
                <form>
                    <label for="name">Enter your name</label>
                    <input type="text" placeholder="Your Name" name="name" id="name" className="form-input"/>
                    <br></br>
                    <p>remain anonymous</p>
                    <input type="radio" name="trainer-confirm" id="trainer-yes" />
                    <label for="anonymous-yes">Yes</label>
                    <input type="radio" name="trainer-confirm" id="trainer-no" />
                    <label for="anonymous-no">No</label>
                    <p>Rate your experience</p>
                    <Rating
                        value={value}
                        name="rating"
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onClick={props.handInputChange}
                    /> 
                    <br></br>
                    <label for="review">Write your review  here</label>
                    <input type="text" placeholder="Your review" name="review" id="review" className="form-input"/>
                </form>
            </div>
            {/* display reveiws */}
            <div className="form">
                {reviews.map(review => (
                    <div>
                        <h3>{review.name}</h3>
                        <h4>{review.comment}</h4>
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

            <div>
                {/* average rating */}
                <Rating
                    value={getReviewRating()}
                    name="rating"
                    size="medium"
                    precision={0.5}
                    readOnly="true"            
                    /> 
                {/* set customer rating */}
                <hr></hr>
                
            </div>
        </section>  
        </div>
    )
}

export default Review;