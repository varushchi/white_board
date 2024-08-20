import React from "react";
import './Spell.css'

function Spell(props)
{
  const [movingLeft, setMovingLeft] = React.useState(props.movingLeft)
  const [left, setLeft] = React.useState(movingLeft ? 0 : 70)
  const defaultLeft = movingLeft ? 0 : 70
  let collision
  function MoveHorizontal()
  {
    if (movingLeft){
      collision = 750
      setLeft(prev => prev + 1)

      if (left >= collision){
        setLeft(defaultLeft)
      }
    }
    else{
      collision = -700
      setLeft(prev => prev - 1)
      
      if (left<=collision)

      setLeft(defaultLeft)
    }
  } 

  React.useEffect(()=>{
    setTimeout(()=>{
      MoveHorizontal()
    },5)
  })

  
  return(
    <div className="spell" style={{left: left, backgroundColor: props.color}}></div>
  )
}

export default Spell