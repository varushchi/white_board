import React from 'react'
import './ChangeColor.css'

export default function ChangeColor(props) {
  const [rgb, setRgb] = React.useState({r: props.rgb.r, g: props.rgb.g, b: props.rgb.b})

  return (
    <ul className='ChangeColor'>
      <li className='header'>{`change spell color for ${props.color} player`}</li>
      <ul>
        <li>
          <label for = 'r'>R</label>
          <input name='r' value={rgb.r} onChange={(e) => setRgb({
            ...rgb,
            r: e.target.value})}/>
        </li>
        <li>
          <label for = 'g'>G</label>
          <input name='g' value={rgb.g} onChange={(e) => setRgb({
            ...rgb,
            g: e.target.value})}/>
        </li>
        <li>
          <label for = 'b'>B</label>
          <input name='b' value={rgb.b} onChange={(e) => setRgb({
            ...rgb,
            b: e.target.value})}/>
        </li>
        <li>
          <button onClick={()=>props.handleChange(rgb)}>Change</button>
        </li>
        <li>
          <button onClick={props.handleClick}>Close</button>
        </li>
      </ul>
    </ul>
    
  )
}
