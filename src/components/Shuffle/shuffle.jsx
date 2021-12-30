
import React, {useState} from 'react';
import './shuffle.css';

import redBulb from '../../assets/images/red_ledbulb.jpg';
import greenBulb from '../../assets/images/green_ledbulb.jpg';
import whiteBulb from '../../assets/images/white_ledbulb.jpg';

const Shuffle = () => {
        
        const patterns= [
            {
                id: 1,
                pattern: [redBulb, greenBulb, whiteBulb, redBulb, greenBulb, whiteBulb,]
            },
            {
                id: 2,
                pattern: [redBulb, greenBulb, redBulb, greenBulb, redBulb, greenBulb]
            },
            {
                id: 3,
                pattern: [redBulb, whiteBulb, redBulb, whiteBulb, redBulb, whiteBulb]
            },
            {
                id: 4,
                pattern: [whiteBulb, greenBulb, whiteBulb, greenBulb, whiteBulb, greenBulb]
            }
        ]

        let [index, setIndex] = useState(0);
        
    return (
        <div>
            <div className="displayCard">
                <button onClick={() => setIndex(index - 1)} disabled={index == 0}>previous</button>
                    {patterns[index].pattern.map((data) => {
                        return (
                            <div key={data.id}>
                            <img key={data.id} className="lightCard" src={data}/>
                        </div>
                        )
                    })}
                <button onClick={() => setIndex(index + 1)} disabled={index == patterns.length-1}>next</button>
            </div>             
        </div>
    )
}

export default Shuffle;