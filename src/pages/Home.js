import React from 'react';

// import Countdown from '../components/Countdown/countdown';
import Form from '../components/Form/form';
import Slideshow from '../components/Slideshow/slideshow';
import Shuffle  from '../components/Shuffle/shuffle';

const Home = () => {  

    return (
        <main>
            <Shuffle/>
            <Slideshow/>
            <hr></hr>
            <Form/>
            <hr></hr>
        </main>
    );
};

export default Home;