import React, {Component} from 'react';

// // To create a socket that connects client to the server
//import socketIOClient from "socket.io-client";
import io from 'socket.io-client';

// Redux imports
import { connect } from 'react-redux';
import { setUsername } from './Actions'

// Components
import { 
  ConnectFour
} from './Components';

class App extends Component {

  renderConnectFour() {
    if(this.props.username != null) {
      return <ConnectFour/>;
    }
  }

  constructor(props) {
    super(props);

    // Open up a socket to my API to recieve a username
    const socket = io("http://localhost:5000");
    socket.emit('newUser');

    // Set the username to the redux store
    socket.on('getUsername', function(data) {
      props.setUsername(data.username);
      socket.removeListener('getUsername');
    })
  }

  render() {
    return (
      <div>
        {this.renderConnectFour()}
      </div>
    );
  }
}

const actions = {
  setUsername
};

const mapStateToProps = (state) => {
  return({
    username: state.main.username
  });
}

export default connect(mapStateToProps, actions)(App);
