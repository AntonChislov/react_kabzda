import React from 'react';

type RatingPropsType = {
    rating: number
    setRating: (value: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    setRating: (value: RatingValueType) => void
    id: RatingValueType
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

const Star = ({selected, setRating, id}: StarPropsType) => {
    return (
        <span onClick={() => setRating(id)}>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}

export const Rating = ({rating, setRating}: RatingPropsType) => {
    return (
        <div>
            <Star id={1} setRating={setRating} selected={rating >= 1}/>
            <Star id={2} setRating={setRating} selected={rating >= 2}/>
            <Star id={3} setRating={setRating} selected={rating >= 3}/>
            <Star id={4} setRating={setRating} selected={rating >= 4}/>
            <Star id={5} setRating={setRating} selected={rating >= 5}/>
        </div>
    );
}

