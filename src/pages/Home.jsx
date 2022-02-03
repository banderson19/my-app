import React from 'react';
import { Navbar, Shuffle, Slideshow, Form, Review, Contact, Footer } from '../components/index';



const Home = () => {
    return (
        <main className="gradient_bg">
            <Navbar />
            <Slideshow />
            <Contact />
            <Shuffle/>
            <Form />
            <Review />
            <Footer />
        </main>
    );
};

export default Home;