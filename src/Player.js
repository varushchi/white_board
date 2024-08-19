import React from "react";
import './Player.css'

function Player(props) {

  const [top, setTop] = React.useState(props.startPoint)
  const collision = 700
  const [movingDown, setMovingDown] = React.useState(true)
  const [mouseEnter, setMouseEnter] = React.useState(false)
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

    if (mouseEnter){
      movingDown ? setTop(prev => prev - 10) : setTop(prev=>prev+12)
      setMovingDown(prev => !prev)
      setMouseEnter(false)
    }
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      MoveVertical()
    },1)
  })

  return(
    <div className="player" style={{backgroundColor: props.color, left: props.positionLeft, top: top}} onMouseEnter={() => setMouseEnter(true)}></div>
  )
}

export default Player;