import React from 'react';

import  { Shuffle, Slideshow, Form, Review} from '../components/index';


const Home = () => {  

    return (
        <main className="gradient_bg_1">
            <Shuffle/>
            <Slideshow/>
            <Form/>
            <Review/>
        </main>
    );
};

export default Home;