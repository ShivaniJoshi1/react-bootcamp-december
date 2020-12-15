import { useState, useEffect } from 'react';
import TodoTitle from './TodoTitle';

function Todo({ data }) {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
         console.log(data);
        setTodos(data);
    }, [data]);

const todoEl = todos.map(todo => <TodoTitle title={todo.item.name} description={todo.item.description} featuredImg={todo.item.images.featured} ratingAvgStars={todo.item.ratings.avgStars} key={todo.itemId} />)

    return (
        <div>
            <div className="row">
                <div className="col">
                    {todoEl}
                </div>
            </div>
        </div>
    )
}

export default Todo;
