

function Player(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={props.viewBox} fill={props.color} stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx={props.x} cy={props.y} r={props.radius}></circle></svg>
  );
}

export default Player;