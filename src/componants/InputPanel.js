import React, { Component } from 'react';

// A simple component that has an text input, and an button.
// Since we do not always what the value before after the user is done typing.  
class InputPanel extends Component {
    constructor(props) {
        super(props);
        // I hava state too, but only for simple use in the componant.
        // The application state should be closer to the top.
        this.state = {
            inputValue: ''
        };
    }
    
    // all the children elements values are controled by the state.
    // so when the element changes (a user types in data), I neet to set
    // the value in state.
    updateIntpuValue(ev) {
        // just to make sure we handle it if somthing is missing.
        const value = ev && ev.target ? ev.target.value : '';

        // Here I update my state. Remeber only new states are allowd. 
        this.setState(prevState => ({ inputValue: value }));
    }

    // send the text value of this compontant to the parrent. They should
    // know what to do with the value.
    sendTextValue(ev) {
        // I' not going to submit to the server.
        ev.preventDefault();
        // here I send the value to my parrent element.
        this.props.valueUpdated(this.state.inputValue);
    }

    render() {
        return (
            <form onSubmit={ev => this.sendTextValue(ev)}>
                <div className='input-panel' >
                    <input type="text" value={this.state.inputValue} onChange={ev => this.updateIntpuValue(ev)} />
                    <input type="submit" value={this.props.buttonText} />
                </div>
            </form>
        );
    }
}

export default InputPanel;