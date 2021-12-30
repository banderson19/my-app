import React from 'react';

import  { Shuffle, Slideshow, Form, Review} from '../components/index';


const Home = () => {  

    return (
        <main className="gradient_bg">
            <Form/>
            <Shuffle/>
            <Slideshow/>
            <hr></hr>
            <hr></hr>
            <Review/>
        </main>
    );
};

export default Home;