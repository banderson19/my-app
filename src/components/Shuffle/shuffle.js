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
import greenBulb from '../../assets/images/green_ledbulb.jpg'
import whiteBulb from '../../assets/images/white_ledbulb.jpg'


const Shuffle = () => {
    // turn into object with properties 
    let lightArr = [
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

    const arrayShuffle = (array) =>  {
        for (var i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() *  (i + 1));
            const  temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    
    arrayShuffle(lightArr);
    console.log(lightArr);
    

    return (
        <div>
            {/* <div>
                {lightArr.map((light, i) => {
                    // <h4>{light.color}</h4>
                    <img
                        src={light.img}
                        style={{width:"50px" ,length:"50px"}}
                    />
                })}
            </div> */}
            
            <h6>{lightArr[0].img}</h6>
        </div>
    )
}

export default Shuffle;