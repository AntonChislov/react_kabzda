import React from 'react';

type RatingPropsType = {
    rating: number
}

type StarPropsType = {
    selected: boolean
}

const Star = ({selected}: StarPropsType) => {
    return (
        <span>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}

export const Rating = ({rating}: RatingPropsType) => {
    return (
        <div>
            <Star selected={rating >= 1}/>
            <Star selected={rating >= 2}/>
            <Star selected={rating >= 3}/>
            <Star selected={rating >= 4}/>
            <Star selected={rating >= 5}/>
        </div>
    );
}

