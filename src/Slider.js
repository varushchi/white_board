import React from "react";
import './Slider.css'

function Slider()
{
  const [speed, setSpeed] = React.useState(0)
  return(
    <input type="range" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
  )
}

export default Slider