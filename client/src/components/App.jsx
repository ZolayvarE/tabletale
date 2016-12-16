import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Oh shit, he\'s coming!'
    };
  }

  componentDidMount () {
    var context = this;
    setTimeout(() => {
      context.setState({message: 'Hey man! Nothing suspicious going on here!'});
    }, 150);
  }

  render() {
    return (
      <div>{ this.state.message }</div>
    );
  }

}


export default App;