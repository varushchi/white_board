import React from "react";

export default function MovePlayer(startPoint)
{
  const [top, setTop] = React.useState(startPoint)
  const collision = 700
  const [movingDown, setMovingDown] = React.useState(true)
  const MoveVertical = () => {
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

    
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      MoveVertical()
    },1)
  })
  return top
}