
import React, {useState} from 'react';
import './shuffle.css';

// faceted bulbs from onlin
// import redBulb from '../../assets/images/red_ledbulb.jpg';
// import greenBulb from '../../assets/images/green_ledbulb.jpg';
// import whiteBulb from '../../assets/images/white_ledbulb.jpg';

// photo shop photos from flaticon ** give credit before hosting
import redBulb from  '../../assets/images/redbulb.png';
import whiteBulb from  '../../assets/images/whitebulb.png';
import greenBulb from  '../../assets/images/greenbulb.png';
import warmBulb from  '../../assets/images/warmbulb.png';
import blueBulb from  '../../assets/images/bluebulb.png';

// icons
import left_arrow  from '../../assets/icons/left_arrow.png';
import right_arrow from '../../assets/icons/right_arrow.png'


const Shuffle = () => {
        
        const patterns= [
            {
                id: 1,
                pattern: [redBulb, greenBulb, whiteBulb, redBulb, greenBulb, whiteBulb, redBulb, greenBulb, whiteBulb, redBulb, greenBulb, whiteBulb]
            },
            {
                id: 2,
                pattern: [redBulb, greenBulb, redBulb, greenBulb, redBulb, greenBulb, redBulb, greenBulb, redBulb, greenBulb, redBulb, greenBulb]
            },
            {
                id: 3,
                pattern: [redBulb, whiteBulb, redBulb, whiteBulb, redBulb, whiteBulb, redBulb, whiteBulb, redBulb, whiteBulb, redBulb, whiteBulb]
            },
            {
                id: 4,
                pattern: [whiteBulb, greenBulb, whiteBulb, greenBulb, whiteBulb, greenBulb, whiteBulb, greenBulb, whiteBulb, greenBulb, whiteBulb, greenBulb]
            },
            {
                id: 5,
                pattern: [warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb, warmBulb]
            },
            {
                id: 6,
                pattern: [warmBulb, redBulb, warmBulb, redBulb, warmBulb, redBulb, warmBulb, redBulb, warmBulb, redBulb, warmBulb, redBulb]
            },
            {
                id: 7,
                pattern: [redBulb, redBulb, whiteBulb, greenBulb, greenBulb, whiteBulb, redBulb, redBulb, whiteBulb, greenBulb, greenBulb, whiteBulb]
            },
            {
                id: 8,
                pattern: [blueBulb, whiteBulb, blueBulb, whiteBulb, blueBulb, whiteBulb, blueBulb, whiteBulb, blueBulb, whiteBulb, blueBulb, whiteBulb]
            },
            {
                id: 9,
                pattern: [redBulb, blueBulb, redBulb, blueBulb, redBulb, blueBulb, redBulb, blueBulb, redBulb, blueBulb, redBulb, blueBulb]
            }
        ]

        let [index, setIndex] = useState(0);
        
    return (
        <div className="shuffleContainer ">
            <div className="displayCard">
                    {patterns[index].pattern.map((data) => {
                        return (
                            <div key={data.id}>
                            <img key={data.id} className="lightCard" src={data}/>
                        </div>
                        )
                    })}
                    <br />
            </div>   
            <div className="buttonDisplay">            
                <input type="image" src={left_arrow} className="shuffleButton" onClick={() => setIndex(index - 1)} disabled={index === 0}></input>
                <input type="image" src={right_arrow} className="shuffleButton" onClick={() => setIndex(index + 1)} disabled={index === patterns.length-1}></input>
            </div>          
        </div>
    )
}

export default Shuffle;