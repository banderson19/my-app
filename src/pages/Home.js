import React from 'react';

// import Countdown from '../components/Countdown/countdown';
import Form from '../components/Form/form';
import Slideshow from '../components/Slideshow/slideshow';
import Review from '../components/Review/review';


const Home = () => {  

    return (
        <main>
            <Slideshow/>
            <hr></hr>
            <Form/>
            <hr></hr>
            <Review/>
        </main>
    );
};

export default Home;