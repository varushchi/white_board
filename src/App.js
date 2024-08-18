import './App.css'
import Player from './Player';

function App() {
  return (
    <div className="App">
      <div className="play-border">
        <Player
          width = '100'
          height = 'auto'
          viewBox = '0 0 24 1000'
          color = 'red'
          x = '10'
          y = '100'
          radius = '20'
        />

        <Player
          width = '100'
          height = 'auto'
          viewBox = '0 0 24 1000'
          color = 'green'
          x = '10'
          y = '100'
          radius = '20'
        />
      </div>
    </div>
  );
}

export default App;
