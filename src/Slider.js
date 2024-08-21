import React from "react";
import './Slider.css'

function Slider(props)
{

  const [speed, setSpeed] = React.useState(1)
  return(
    <input type="range" value={speed} min={1} max={5} onChange={(e) => {
      props.handleChange(e)
      setSpeed(e.target.value)
    }}/>
  )
}

export default Slider