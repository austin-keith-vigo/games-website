import React, {Component} from 'react';

// To create a socket that connects client to the server
import socketIOClient from "socket.io-client";

// Redux imports
import { connect } from 'react-redux';

// Components
import { 

} from './Components';

class App extends Component {

  state = {
    response: false,
    endpoint: "http://localhost:5000",
    response: null
  };

  constructor(props) {
    super(props);
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({response: data }));
  }
  
  render() {
    return (
      <div>
          <h1>It is working</h1>
      </div>
    );
  }
}

export default App;
