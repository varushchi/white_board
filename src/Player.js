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
  const [redScore, setRedScore] = React.useState(0)
  const [greenScore, setGreenScore] = React.useState(0)
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
      movingDown ? setTop(prev => prev - 10) : setTop(prev=>prev + 10)
      setMovingDown(prev => !prev)
      setMouseEnter(false)
    }
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      MoveVertical()
    },props.slider)
  })

  function handleScore(score)
  {
    props.color === 'red' ? setRedScore(score) : setGreenScore(score)
  }


  return(
    <div className="player" style={{backgroundColor: props.color, left: props.positionLeft, top: top}} onMouseEnter={() => setMouseEnter(true)}>
      <Spell movingLeft = {props.movingLeft} color = {props.color} parentTop = {top} score = {handleScore}/>
      <p className="score">{props.color === 'red' ? redScore : greenScore}</p>
    </div>
  )
}

export default Player;