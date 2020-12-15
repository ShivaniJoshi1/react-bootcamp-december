import Rating from './Rating';

function Card({ itemName, description, itemImage, rating, itemId }) {
    return (
        <div className="card h-100">
            <img src={itemImage} className="card-img-top" alt={itemName} />
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">{description}</p>
            </div>
            <Rating avgStars={rating.avgStars} totalPoints={rating.totalPoints} numberVotes={rating.numberVotes} itemId={itemId} />
        </div>
    );
}

export default Card;
