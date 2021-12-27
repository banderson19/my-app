
import React, {useState} from 'react';
import './shuffle.css';

import redBulb from '../../assets/images/red_ledbulb.jpg';
import greenBulb from '../../assets/images/green_ledbulb.jpg';
import whiteBulb from '../../assets/images/white_ledbulb.jpg';

const Shuffle = () => {
        
        const lightArr= [
            {
                color: "red",
                img: redBulb
            },
            {
                color: "green",
                img: greenBulb
            },
            {
                color: "white",
                img: whiteBulb
            }
        ]
        
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
    

        let patternIndex = 0;

        const [counter, setCounter] = useState(0)
        // const incrementIndex = () => {
        //     patternIndex ++;
        //     console.log(patternIndex)
        // }
        // console.log(patterns[1])
        // console.log('index', patternIndex)
        
    const arrayShuffle = (array) =>  {
        for (var i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() *  (i + 1));
            const  temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    
    console.log(arrayShuffle(lightArr));
    console.log(lightArr);
    // const result = () => lightArr.map(light => {
    //    var color = light.color
    //     return color
    // })
    // console.log(lightArr.map(light => ({value : light.color})))

        
    return (
        <div>
            <div className="displayCard">
                <button>previous</button>
                    {patterns[counter].pattern.map((data) => {
                        console.log(data)
                        return (
                            <div key={data.id}>
                                <img key={data.id} className="lightCard" src={data}/>
                            </div>
                        )
                    })}
                <button onClick={() => {
                    while(counter < patterns.length) {
                        setCounter(counter + 1)
                    }
                    
                }}>next</button>
            </div>             
        </div>
    )
}

export default Shuffle;