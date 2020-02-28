import React, { Component } from 'react';
import { connect } from 'react-redux';

class HelloWorldLabel extends Component{
    render() {
        return(
            <h1>{this.props.labelColor}</h1>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return({
        labelColor: state.main.labelColor
    });
}

export default connect(mapStateToProps)(HelloWorldLabel);