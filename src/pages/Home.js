import React from 'react';

import Countdown from '../components/Countdown/countdown';
import Form from '../components/Form/form';

const Home = () => {  

    return (
        <main>
            <Countdown/>
            <div className = 'flex-row justify-space-between'>
                <h1>hello old friend</h1>
            </div>
           
            <Form/>
        </main>
    );
};

export default Home;