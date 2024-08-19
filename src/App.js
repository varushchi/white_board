import './App.css'
import Player from './Player';

function App() {

  return (
    <div className="App">
      <div className="play-border">
        <Player 
          color = 'red'
          positionLeft = '20px'
          startPoint = {0}
        />
        <Player
          color = 'green'
          positionLeft = '580px'
          startPoint = {500}
        />
      </div>
    </div>
  );
}

export default App;
