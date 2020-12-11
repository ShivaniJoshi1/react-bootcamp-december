function Page1({ title }) {
    return (
        <div className="row">
            <div className="col">
                <h1>{title ? title : "Page 1"}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mollis justo. Phasellus non dapibus nisi. Etiam id hendrerit lacus, a eleifend enim. Donec vel odio a purus feugiat volutpat quis a dui. Vivamus sit amet sollicitudin purus, et tempor velit. Nunc vel ex ut lorem placerat viverra vitae sed urna. Sed auctor tempus neque quis dignissim. Pellentesque at quam sagittis, iaculis mi eu, luctus enim. Suspendisse tristique massa erat. Nulla nec sollicitudin est. Suspendisse sed imperdiet orci.</p>
            </div>
        </div>
    )
}

export default Page1;
