// let lightArr = [red, green, white, warm, blue, purple, orange, pink]

// const  arrayShuffle = (arr) => {
//     let newpos,
//         temp;r

//     for (var i = arr.length -1 ; i < 0; i++ ) {
//         newPos = Math.floor(Math.random() * (i + 1))
//         temp = arr[i]
//         arr[i]  = arr[newPos]
//         arr[newPos] = temp;
//     }
//     return arr;
// }

// let newArray =  arraySuffle(arr);

// console.log(newArray)

import React from 'react';

import redBulb from '../../assets/images/red_ledbulb.jpg';
import greenBulb from '../../assets/images/green_ledbulb.jpg';
import whiteBulb from '../../assets/images/white_ledbulb.jpg';

const Shuffle = () => {
    // turn into object with properties 
    let lightArr, patterns, red, green, white

    // red = redBulb
    // green = greenBulb
    // white = whiteBulb
    lightArr = [
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
    
    patterns = [
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



    const arrayShuffle = (array) =>  {
        for (var i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() *  (i + 1));
            const  temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    
    // arrayShuffle(lightArr);
    // console.log(lightArr);
    const result = () => lightArr.map(light => {
       var color = light.color
        return color
    })
    console.log(lightArr.map(light => ({value : light.color})))


    return (
        <div>
            <div className="displayCard">
                <button>previous</button>
                <h6>{patterns[0].id}</h6>
                {patterns.map((pattern, i) => {
                    
                })}
                {patterns[0].pattern.map((result, i) => {
                    console.log(result)
                    return (
                        <img className="lightCard" src={result}/>
                    )
                })}
                <button>next</button>
            </div>
            {/* <div>
                {patterns.map((result, i) => {
                    console.log('result', result)
                    console.log(111, result.pattern[0])
                    {result.pattern.map((data, i) => {
                        var newdata = JSON.stringify(data)
                        console.log('newdata', newdata);
                        return (
                            <div>
                            <img className="lightCard" src={data}/>
                            </div>
                        )
                    })}
                })}
            </div> */}
            
        </div>
    )
}

export default Shuffle;