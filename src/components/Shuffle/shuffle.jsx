
import React, {useState} from 'react';
import './shuffle.css';

import redBulb from '../../assets/images/red_ledbulb.jpg';
import greenBulb from '../../assets/images/green_ledbulb.jpg';
import whiteBulb from '../../assets/images/white_ledbulb.jpg';

const Shuffle = () => {
        
        const patterns= [
            {
                id: 1,
                pattern: [redBulb, greenBulb, whiteBulb]
            },
            {
                id: 2,
                pattern: [redBulb, greenBulb, redBulb]
            },
            {
                id: 3,
                pattern: [redBulb, whiteBulb, redBulb]
            },
            {
                id: 4,
                pattern: [whiteBulb, greenBulb, whiteBulb]
            }
        ]

        let [index, setIndex] = useState(0);
        // console.log('index', index)
        const incrementIndex = (index)  => {
            setIndex(index+1)
        }

        const decrementIndex = (index) => {
        //     // setIndex(index -1) 
        } 
    //     const arrayShuffle = (array) =>  {
    //     for (var i = array.length -1; i > 0; i--){
    //         const j = Math.floor(Math.random() *  (i + 1));
    //         const  temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     console.log('new', array)
    //     return array
    // }
    
    // arrayShuffle(patterns);
    // console.log(arrayShuffle(patterns));
    return (
        <div>
            <div className="displayCard">
                <button onClick={() => {decrementIndex(index)}}>previous</button>
                    {patterns[0].pattern.map((data) => {
                        console.log(data)
                        return (
                            <div key={data.id}>
                                <img key={data.id} className="lightCard" src={data}/>
                            </div>
                        )
                    })}
                <button onClick={() => {incrementIndex(index)}}>next</button>
            </div>             
        </div>
    )
}

export default Shuffle;