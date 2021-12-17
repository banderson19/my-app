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

const Shuffle = () => {
    // turn into object with properties 
    let lightArr = [1, 2, 3, 4, 5]
    let lightObjArr = [
        {
            color: "red",
            size: "C7"
        },
        {
            color: "green",
            size: "C7"
        },
        {
            color: "white",
            size: "C7"
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
    
    arrayShuffle(lightObjArr);
    console.log(lightObjArr);

    return (
        <div>

        </div>
    )
}

export default Shuffle;