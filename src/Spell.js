import React from "react";
import './Spell.css'
import { useSelector } from "react-redux";

function Spell(props)
{
  const movingLeft = props.movingLeft
  const defaultLeft = movingLeft ? 70 : 0
  let collision
  const [left, setLeft] = React.useState(defaultLeft)
  const [parentTop, setParentTop] = React.useState()
  const [topOnSpell, setTopOnSpell] = React.useState() 
  const [alive, setAlive] = React.useState(true)
  const [redScore, setRedScore] = React.useState(0)
  const [redScored, setRedScored] = React.useState(false)
  const [greenScore, setGreenScore] = React.useState(0)
  const [greenScored, setGreenScored] = React.useState(false)

  const redPosition = useSelector((state) => state.redPosition).value
  const greenPosition = useSelector((state) => state.greenPosition).value

  const greenBall = {
    top: greenPosition,
    buttom: greenPosition + 100,
    left: 640,
    right: 740 
  }

  const redBall = {
    top: redPosition,
    buttom: redPosition + 100,
    left: -670,
    right: -570
  }

  function MoveHorizontal()
  {
    function backToDefault()
    {
      setLeft(defaultLeft)
      setParentTop(40)
      setAlive(false)
    }

    if (alive)
    {
      setParentTop(-10 + topOnSpell - props.parentTop)

      if (movingLeft){
        collision = 750
        setLeft(prev => prev + 1)
        if (left >= collision){
          backToDefault()
        }
        if (left <= greenBall.right && left >= greenBall.left && topOnSpell <= greenBall.buttom && topOnSpell >= greenBall.top){
          backToDefault()
          setRedScored(true)
        }

      }
      else{
        collision = -700
        setLeft(prev => prev - 1)
        
        if (left<=collision){
          backToDefault()
        }

        if (left <= redBall.right && left >= redBall.left && topOnSpell <= redBall.buttom && topOnSpell >= redBall.top){
          backToDefault()
          setGreenScored(true)
        }
      }
    }
  }

  React.useEffect(()=>{
      MoveHorizontal()
  },[redPosition, greenPosition])

  React.useEffect(()=>{
    setTopOnSpell(props.parentTop)
    if (!alive){
      if (redScored)
      {
        setRedScored(false)
        setRedScore(prev => prev + 1)
        props.score(redScore)
      }

      if (greenScored)
      {
        setGreenScored(false)
        setGreenScore(prev => prev + 1)
        props.score(greenScore)
      }

      setTimeout(()=>{
        setAlive(true)
      },props.spellSlider)
    }
  },[alive])

  
  return(
    <div className="spell" style={{left: left, backgroundColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`, top: parentTop}}></div>
  )
}

export default Spell