import React from "react";
import './Slider.css'

function Slider(props)
{

  const [speed, setSpeed] = React.useState(1)
  return(
    <label>
      <span>{props.name === 'speed' ? 'change player speed': 'change fire frequency'}</span>
      <input type="range" name = {props.name} value={speed} min={props.min} max={props.max} step={props.step} onChange={(e) => {
        props.handleChange(e)
        setSpeed(e.target.value)
      }}/> 
    </label>
    
  )
}

export default Slider