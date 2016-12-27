import React from 'react';
import { browserHistory } from 'react-router';

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    console.log(this);
  }



  render () {
    return (
      <div className="Game">
        <div className='GameMenu'>
          { Math.random() }
        </div>
      </div>
    );
  }

}

export default Game;

