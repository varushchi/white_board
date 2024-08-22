import React from "react";
import './Player.css'
import Spell from "./Spell";
import { useDispatch } from "react-redux";
import { updateRed } from './redPosition';
import { updateGreen } from './greenPosition';

function Player(props) {
  const [top, setTop] = React.useState(props.startPoint)
  const collision = 700
  const [movingDown, setMovingDown] = React.useState(true)
  const [mouseEnter, setMouseEnter] = React.useState(false)
  const dispatch = useDispatch()
  
  const MoveVertical = () => {

    props.color === 'red' ? dispatch(updateRed(top)) : dispatch(updateGreen(top))
    if (movingDown){
      setTop(prev => prev + 1)

      if (top >= collision){
        setMovingDown(false)
      }
    }
    else{
      setTop(prev=>prev-1)
    }
    if (top <= 0){
      setMovingDown(true)
    }

    if (mouseEnter){
      movingDown ? setTop(prev => prev - 6) : setTop(prev=>prev + 6)
      setMovingDown(prev => !prev)
      setMouseEnter(false)
    }
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      MoveVertical()
    },props.slider)
  })

  return(
    <div 
      className="player" 
      style={{backgroundColor: props.color, left: props.positionLeft, top: top}} 
      onMouseOverCapture={() => setMouseEnter(true)} 
      onClick={ props.handleClick }>

      <Spell 
        movingLeft = {props.movingLeft} 
        color = {props.spellColor} 
        parentTop = {top} 
        score = {props.handleScore} 
        spellSlider = {props.color === 'red' ? props.sliderSpell1 : props.sliderSpell2}/>
    </div>
  )
}

export default Player;