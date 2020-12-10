import { useState } from 'react'

function Calc() {
    const [state, setState] = useState({
        num1: null,
        num2: null,
        result: null
    });

    const calc = () => {
        const result = state.num1 + state.num2;
        setState({ ...state, result });
    }

    return (
        <div id="calc">
            <p><input type="text" value={state.num1} onChange={e => setState({ ...state, num1: parseInt(e.target.value) })} /></p>
            <p><input type="text" value={state.num2} onChange={e => setState({ ...state, num2: parseInt(e.target.value) })} /></p>
            <button onClick={e => calc()}>Calculate</button>
            <p>{state.result}</p>
        </div>
    );
}

export default Calc;