import React from 'react';

class CalcClassProps extends React.Component {

    render() {
        return (
            <div id="calc">
                <p><input type="text" value={this.props.num1} onChange={e => this.props.setValues({ num1: parseInt(e.target.value) })} /></p>
                <p><input type="text" value={this.props.num2} onChange={e => this.props.setValues({ num2: parseInt(e.target.value) })} /></p>
                <button onClick={e => this.props.calc()}>Calculate</button>
                <p>{this.props.result}</p>
            </div>
        );
    }
}

export default CalcClassProps;
