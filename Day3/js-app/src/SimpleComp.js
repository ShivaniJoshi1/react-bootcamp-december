function SimpleComp({ txt, children }) {
    return (
        <h1>{children ? children : txt}</h1>
    )
}

export default SimpleComp;
