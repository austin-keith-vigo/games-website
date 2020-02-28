import React, { Component } from 'react';

// Redux imports
import { connect } from 'react-redux';
import { changeLabelColor } from './../Actions';

class ChangeLabelButton extends Component {
    render() {
        return(
            <button onClick={()=>{this.props.changeLabelColor()}}>change</button>
        );
    }
}

const actions = {
    changeLabelColor
};

export default connect(null, actions)(ChangeLabelButton);