import './App.css'
//import Player from './Player';
import MovePlayer from './MovePlayer';

function App() {

  const top1 = MovePlayer(0)
  const top2 = MovePlayer(500)
  return (
    <div className="App">
      <div className="play-border">
        <div className='player-1' style={{top: top1}}></div>
        <div className='player-2' style={{top: top2}}></div>
      </div>
    </div>
  );
}

export default App;
