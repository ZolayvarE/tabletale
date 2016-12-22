import React from 'react';
import { browserHistory } from 'react-router';

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="Game">
        <div className='GameMenu'>
          This is the game board!
        </div>
      </div>
    );
  }

}

export default Game;

