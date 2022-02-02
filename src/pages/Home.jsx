import React from 'react';
import { Navbar, Shuffle, Slideshow, Form, Review, Header } from '../components/index';



const Home = () => {
    return (
        <main className="gradient_bg2">
            <Navbar />
            <Slideshow />
            <Header />
            <Shuffle/>
            <Form />
            <Review />
        </main>
    );
};

export default Home;