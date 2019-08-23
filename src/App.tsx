import React from 'react';
import './pai.css';
import './tenbo.css';
import PlayerContainer from './containers/playerContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <PlayerContainer />
      {/* <GameContainer /> */}
      {/* <PaiContainer /> */}
    </div>
  );
}



export default App;
