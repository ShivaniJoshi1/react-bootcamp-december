
function TodoTitle({ title, description, featuredImg, ratingAvgStars}) {
    return (
        <div className="card" >
        <img className="card-img-top" src={featuredImg} style={{width: "18rem"}} title={title} alt={title}/>
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Rating: {ratingAvgStars}</p>
        </div>
      </div>
    )
}

export default TodoTitle;
