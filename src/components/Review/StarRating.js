// Star Rating Styling Tutorial : https://youtu.be/Pl2Fn6PIpaI
import React from 'react'
import StarIcon from './StarIcon'
import './StarRating.css';

function StarRating(props) {

    const {
        index,
        rating,
        hoverRating,
        onMouseEnter,
        onMouseLeave,
        onSaveRating,
    } = props;

    const fill = React.useMemo(() => {
        if (hoverRating >= index) {
            return 'blue';
        }
        else if (!hoverRating && rating >= index) {
            return 'blue';
        }
        return 'none';

    }, [rating, hoverRating, index]);

    return (
        <div
            className="StarRating" 
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}
        >
            <StarIcon fill={fill} />
        </div>
    )
}

export default StarRating
