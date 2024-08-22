import React from 'react';
import './App.css'
import Player from './Player';
import Slider from './Slider';
import ChangeColor from './ChangeColor';

function App() {
  const [slider1, setSlider1] = React.useState(2)
  const [slider2, setSlider2] = React.useState(2)
  const [sliderSpell1, setSliderSpell1] = React.useState(1)
  const [sliderSpell2, setSliderSpell2] = React.useState(1)
  const [changeGreen, setChangeGreen] = React.useState(false)
  const [changeRed, setChangeRed] = React.useState(false)
  const [greenRgb, setGreenRgb] = React.useState({r: '0', g: '255', b: '0'})
  const [redRgb, setRedRgb] = React.useState({r: '255', g: '0', b: '0'})
  const [redScore, setRedScore] = React.useState(0)
  const [greenScore, setGreenScore] = React.useState(0)


  return (
    <div className="App">
      <div className='board'>
        <h1>
          {`${redScore} : ${greenScore}`}
        </h1>
        <div className='game'>
          <div className='speed-sliders-div'>
            <Slider handleChange={(e) => setSlider1(e.target.value)} min = {2} max = {5} name = 'speed'/>
            <Slider handleChange={(e) => setSliderSpell1(e.target.value)} min = {0} max = {5000} step = {1000} name = 'frequency'/>
          </div>
          
          <div className="play-square">
            <Player 
              color = 'red'
              positionLeft = {20}
              startPoint = {50}
              slider = {slider1}
              sliderSpell1 = {sliderSpell1}
              movingLeft = {true}
              handleClick = {() => setChangeRed(prev => !prev)}
              spellColor = {redRgb}
              handleScore = {(score) => setRedScore(score)}
            />
              
            <Player
              color = 'green'
              positionLeft = {580}
              startPoint = {500}
              slider = {slider2}
              sliderSpell2 = {sliderSpell2}
              movingLeft = {false}
              handleClick = {() => setChangeGreen(prev => !prev)}
              spellColor = {greenRgb}
              handleScore = {(score) => setGreenScore(score)}
            />
          </div>
          <div className='speed-sliders-div'>
            <Slider handleChange={(e) => setSlider2(e.target.value)} min = {2} max = {5} name = 'speed'/>
            <Slider handleChange={(e) => setSliderSpell2(e.target.value)} min = {0} max = {5000} step = {1000} name = 'frequency'/>
          </div>
        </div>
      </div>

      <div className='change-color'>
          {changeRed && <ChangeColor handleChange = {(redRgb) => setRedRgb(redRgb)} rgb={redRgb} color = 'red' handleClick = {() => setChangeRed(prev => !prev)}/>}
          {changeGreen && <ChangeColor handleChange = {(greenRgb) => setGreenRgb(greenRgb)} rgb={greenRgb} color = 'green' handleClick = {() => setChangeGreen(prev => !prev)}/>}
      </div>
      
    </div>
  );
}

export default App;
