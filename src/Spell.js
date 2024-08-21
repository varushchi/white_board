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

  const redPosition = useSelector((state) => state.redPosition).value
  const greenPosition = useSelector((state) => state.greenPosition).value

  const greenBall = {
    top: greenPosition,
    buttom: greenPosition + 100,
    left: 630,
    right: 730 
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
      setParentTop(topOnSpell - props.parentTop)

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
      setTimeout(()=>{
        setAlive(true)
      },1000)
    }
  },[alive])

  
  return(
    <div className="spell" style={{left: left, backgroundColor: props.color, top: parentTop}}></div>
  )
}

export default Spell