import React, {useState} from "react";
import {RatingValueType} from "../../App";

type RatingContrPropsType = {
    raitingValue: RatingValueType
    changeRating: (raitingValue: RatingValueType)=>void
}

export function RatingContr(props: RatingContrPropsType) {



    const changeRatingHandler =(raitingValue: RatingValueType) => props.changeRating(raitingValue)

    return <div>
        <Star callback={changeRatingHandler} id={1} selected={props.raitingValue >= 1}/>
        <Star callback={changeRatingHandler} id={2} selected={props.raitingValue >= 2}/>
        <Star callback={changeRatingHandler} id={3} selected={props.raitingValue >= 3}/>
        <Star callback={changeRatingHandler} id={4} selected={props.raitingValue >= 4}/>
        <Star callback={changeRatingHandler} id={5} selected={props.raitingValue >= 5}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    id: RatingValueType
    callback: (id: RatingValueType)=>void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.callback(props.id)
    }

    return (
        <span onClick={onClickHandler}>{props.selected ? <b>Star </b> : 'Star ' }</span>
    )
}