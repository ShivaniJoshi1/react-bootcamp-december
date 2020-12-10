import React from 'react';

class LifecycleClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCount(flag) {
        if (flag) {
            this.setState({ count: this.state.count + 1 })
        } else {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={e => this.handleCount(true)}>Increase</button>
                <button onClick={e => this.handleCount(false)}>Decrease</button>
            </div>
        )
    }

    componentDidMount() {
        localStorage.setItem('company', 'harman');
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        localStorage.removeItem('company');
        console.log('componentWillUnmount');
    }
}

export default LifecycleClassComp;