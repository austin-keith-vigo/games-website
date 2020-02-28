import React from 'react';

// Redux imports
import { connect } from 'react-redux';

// Components
import { 
  HelloWorldLabel,
  ChangeLabelButton
} from './Components';

const App = () => {
  return (
    <div>
      <HelloWorldLabel/>
      <ChangeLabelButton/>
    </div>
  );
}

const buttonPressed = () => {
  console.log("Test");
}

export default App;
