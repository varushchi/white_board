import React from 'react';
import './App.css'
import Player from './Player';
import Slider from './Slider';

function App() {
  const [slider1, setSlider1] = React.useState(1)
  const [slider2, setSlider2] = React.useState(1)
  return (
    <div className="App">
      <div className="play-border">
        <Player 
          color = 'red'
          positionLeft = {20}
          startPoint = {0}
          slider = {slider1}
          movingLeft = {true}/>
          
        <Player
          color = 'green'
          positionLeft = {580}
          startPoint = {500}
          slider = {slider2}
          movingLeft = {false}/>
          
      </div>
      <div className='speed-sliders-div'>
        <Slider handleChange={(e) => setSlider1(e.target.value)}/>
        <Slider handleChange={(e) => setSlider2(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
