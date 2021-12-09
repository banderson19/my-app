import React from 'react';

const Countdown = () => {

    // date we are counting down to 
    const countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();
    // 1640415600000 is what the computer reads

    // update time after each second
    const x = setInterval(function() {

        
        // get todays date
        const now = new Date().getTime();
        
        // get distance between current and count down date
        const distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demoTime").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
            clearInterval(x)
        }
    }, 1000)
        
    return (
        <div>
            <p>This is the countdown of your life</p>
            <h3 id="demoTime"></h3>
        </div>
    );
};

export default Countdown;