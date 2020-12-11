function ChildProps({ color, children }) {
    return (
        <div style={{ color: color }}>{children}</div>
    );
}

export default ChildProps;
