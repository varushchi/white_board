import React from "react";
import './Slider.css'
import { useDispatch } from "react-redux";
import { changeSlider } from "./changeSlider";

function Slider()
{ 
  const dispatch = useDispatch()
  const [speed, setSpeed] = React.useState(1)
  return(
    <input type="range" value={speed} min={1} max={10} onChange={(e) => {
      setSpeed(e.target.value)
      dispatch(changeSlider(e.target.value))
    }}/>
  )
}

export default Slider