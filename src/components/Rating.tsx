import React from 'react';

type RatingPropsType = {
    rating: number
    callBackRating: (value: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

const Star = ({selected, setRating}: StarPropsType) => {
    return (
        <span onClick={setRating}>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}

export const Rating = ({rating, callBackRating}: RatingPropsType) => {
    return (
        <div>
            <Star setRating={() => callBackRating(1)} selected={rating >= 1}/>
            <Star setRating={() => callBackRating(2)} selected={rating >= 2}/>
            <Star setRating={() => callBackRating(3)} selected={rating >= 3}/>
            <Star setRating={() => callBackRating(4)} selected={rating >= 4}/>
            <Star setRating={() => callBackRating(5)} selected={rating >= 5}/>
        </div>
    );
}

