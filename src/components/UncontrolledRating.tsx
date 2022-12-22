import React, {useState} from 'react';

type StarPropsType = {
    selected: boolean
    onClickHandler: (id: number) => void
    id: number
}

const Star = ({id, selected, onClickHandler}: StarPropsType) => {

    return (
        <span onClick={() => onClickHandler(id)}>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}

export const UncontrolledRating = () => {

    const [rating, setRating] = useState(0)

    const onClickHandler = (id: number) => {
        setRating(id)
    }

    return (
        <div>
            <Star id={1} onClickHandler={onClickHandler} selected={rating >= 1}/>
            <Star id={2} onClickHandler={onClickHandler} selected={rating >= 2}/>
            <Star id={3} onClickHandler={onClickHandler} selected={rating >= 3}/>
            <Star id={4} onClickHandler={onClickHandler} selected={rating >= 4}/>
            <Star id={5} onClickHandler={onClickHandler} selected={rating >= 5}/>
        </div>
    );
}

