import React from 'react';

function Rating({ avgStars, totalPoints, numberVotes, itemId }) {
    return (
        <React.Fragment>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Rating: </strong> {avgStars}</li>
                <li className="list-group-item"><strong>Total Points: </strong> {totalPoints}</li>
                <li className="list-group-item"><strong>Votes: </strong> {numberVotes}</li>
            </ul>
        </React.Fragment>
    );
}

export default Rating;
