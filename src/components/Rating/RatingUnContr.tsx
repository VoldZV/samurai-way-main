import React, {useState} from "react";


type RatingUnContrType = {
    defaultValue?: number
}

export function RatingUnContr(props: RatingUnContrType) {


    const [rating, setRating] = useState(props.defaultValue  ? props.defaultValue : 0)

    const changeRatingHandler =(id:number) => setRating(id)

    return <div>
        <Star callback={changeRatingHandler} id={1} selected={rating >= 1}/>
        <Star callback={changeRatingHandler} id={2} selected={rating >= 2}/>
        <Star callback={changeRatingHandler} id={3} selected={rating >= 3}/>
        <Star callback={changeRatingHandler} id={4} selected={rating >= 4}/>
        <Star callback={changeRatingHandler} id={5} selected={rating >= 5}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    id: number
    callback: (id:number)=>void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=>props.callback(props.id)}>{props.selected ? <b>Star </b> : 'Star ' }</span>
    )
}