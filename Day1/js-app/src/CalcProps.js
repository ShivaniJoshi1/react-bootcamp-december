
function CalcProps(props) {

    return (
        <div id="calc">
            <p><input type="text" value={props.num1} onChange={e => props.setValues({ num1: parseInt(e.target.value) })} /></p>
            <p><input type="text" value={props.num2} onChange={e => props.setValues({ num2: parseInt(e.target.value) })} /></p>
            <button onClick={e => props.calc()}>Calculate</button>
            <p>{props.result}</p>
        </div>
    );
}

export default CalcProps;