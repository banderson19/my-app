import React from 'react';
import { Navbar, Shuffle, Slideshow, Form, Review, Contact } from '../components/index';



const Home = () => {
    return (
        <main className="gradient_bg">
            <Navbar />
            <Slideshow />
            <Contact />
            <Shuffle/>
            <Form />
            <Review />
        </main>
    );
};

export default Home;