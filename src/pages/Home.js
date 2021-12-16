import React from 'react';

import Countdown from '../components/Countdown/countdown';
import Form from '../components/Form/form';
import Slideshow from '../components/Slideshow/slideshow';

const Home = () => {  

    return (
        <main>
            <Countdown/>
            <div className = 'flex-row justify-space-between'>
                <h1>hello old friend</h1>
            </div>
            <Slideshow/>
            <Form/>
        </main>
    );
};

export default Home;