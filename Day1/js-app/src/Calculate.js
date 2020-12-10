import React from 'react';

class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: null,
            num2: null,
            result: null
        };
    }

    calc() {
        // If num1 and num2 are same, then add it and multiply the result with 3.
        // display both results.
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }

    render() {
        return (
            <div id="calc">
                <p><input type="text" value={this.state.num1} onChange={e => this.setState({ num1: parseInt(e.target.value) })} /></p>
                <p><input type="text" value={this.state.num2} onChange={e => this.setState({ num2: parseInt(e.target.value) })} /></p>
                <button onClick={e => this.calc()}>Calculate</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Calculate;