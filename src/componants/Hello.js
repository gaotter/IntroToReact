import React, { Component } from 'react';

// This is the implementation of the 'Hello' compontant. It has some methods it inherit from Componant.
// One of them are render, it renders the html or other componants. 
class Hello extends Component {

    render() {
        // I have one property (props) that I need called 'text'. I'm not allowd to change the value
        // of the property, only read it.
        return (<strong>Yo {this.props.text}</strong>);
    }
}

export default Hello;
