import React, { useState } from 'react';
import './Review.css';
import StarRating from './StarRating'

function Review(props) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="Review flex">
            <h4 className="Review_Username">Username</h4>
            {[1, 2, 3, 4, 5].map((index) => {
                return (
                    <StarRating
                        index={1} rating={rating} hoverRating={hoverRating}
                        onMouseEnter={() => { }}
                        onMouseLeave={() => { }}
                        onSaveRating={() => { }}
                    />
                )
            })}
            <p>
                This is my written review. This is my written review. This is my written review.
                This is my written review. This is my written review. This is my written review.
                This is my written review. This is my written review. This is my written review.
                This is my written review. This is my written review. This is my written review.                This is my written review. This is my written review. This is my written review.
                This is my written review. This is my written review. This is my written review.
            </p>

        </div>
    )
}

export default Review
