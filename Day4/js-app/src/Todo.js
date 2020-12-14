import { useState, useEffect } from 'react';
import TodoTitle from './TodoTitle';

function Todo({ data }) {
    const [todos, setTodos] = useState([]);
    const [textFlag, setTextFlag] = useState('start');
    const [query, setQuery] = useState('');

    useEffect(() => {
        // console.log(data);
        setTodos(data);
    }, [data]);

    const todoEl = todos.map(todo => <TodoTitle title={todo.title} completed={todo.completed} key={todo.id} />)

    const handleCompleted = (flag) => {
        let todosData = data;
        if (flag === true) {
            todosData = data.filter(d => d.completed === true);
        } else if (flag === false) {
            todosData = data.filter(d => d.completed === false);
        }

        setTodos(todosData);
    }

    const handleTextFilter = () => {
        let todosData = data;

        if (query !== '') {
            if (textFlag === 'start') {
                todosData = data.filter(d => d.title.startsWith(query));
            } else {
                todosData = data.filter(d => d.title.includes(query));
            }
        }

        setTodos(todosData);
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col text-left">
                    <button className="btn btn-primary mr-2" onClick={e => handleCompleted(true)}>Completed</button>
                    <button className="btn btn-primary mr-2" onClick={e => handleCompleted(false)}>Not Completed</button>
                    <button className="btn btn-primary" onClick={e => handleCompleted()}>All</button>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-8"><input type="text" className="form-control" placeholder="Filter by text"
                            onChange={e => {
                                setQuery(e.target.value);
                                handleTextFilter();
                            }} /></div>
                        <div className="col-4"><select className="form-control" onChange={e => {
                            setTextFlag(e.target.value);
                            handleTextFilter();
                        }}>
                            <option value="start">Starts with</option>
                            <option value="contains">Contains</option>
                        </select></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {todoEl}
                </div>
            </div>
        </div>
    )
}

export default Todo;
