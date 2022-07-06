import React, {useRef,useState} from 'react';
import '../styles/square.scss';
const Square = () => {
    let red = 0;
    let green = 0;
    let blue = 0;
let rgbColor = `rgb(${red},${green},${blue})`;
const intervalRef = useRef();
const [color, setColor] = useState(rgbColor);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }  
     function handleRandomColor() {
const interval =
setInterval(() => {
       red = getRandomInt(0, 255);
        green = getRandomInt(0, 255);
        blue = getRandomInt(0, 255);
        rgbColor = `rgb(${red},${green},${blue})`;
        setColor(rgbColor)
        return rgbColor; 
      }, 500);
      intervalRef.current = interval;
    };
 function handleStopChange(){
    clearInterval(intervalRef.current);
 }
    return (
        <div className='container' onMouseOver={handleRandomColor} onMouseOut={handleStopChange}>
            <h1 className='container__title'>Square that changes his background-color</h1>
            <div className="container__square" style={{ backgroundColor: color}} ></div>
        </div>
    );
}

export default Square;
