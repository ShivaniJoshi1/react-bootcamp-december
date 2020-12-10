
function TodoTitle({ title, completed }) {
    return (
        <div className={completed ? 'alert alert-success' : 'alert alert-warning'} role="alert">
            {title}
        </div>
    )
}

export default TodoTitle;
