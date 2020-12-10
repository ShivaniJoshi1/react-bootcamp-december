import { useEffect, useState } from 'react';

function LifecycleFuncComp(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('On Mount')
    }, []);

    useEffect(() => {
        console.log('On Update')
    }, [count, props]);

    useEffect(() => {
        return () => {
            console.log('On UnMount');
        }
    }, []);

    const handleCount = (flag) => {
        if (flag) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={e => handleCount(true)}>Increase</button>
            <button onClick={e => handleCount(false)}>Decrease</button>
        </div>
    );
}

export default LifecycleFuncComp;