import React, {MouseEvent, useState} from "react";
import cl from './OnOff.module.css'

type OnOffControlType = {
    on: boolean
    setOn: (isOnn: boolean)=>void
}

export const OnOffControl = (props: OnOffControlType) => {



    const swithBtn = (e: MouseEvent<HTMLDivElement>) => {
        if(e.currentTarget.innerText === 'On') {
            props.setOn(true)
        } else {
            props.setOn(false)
        }
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',

    }

    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '3px',
        backgroundColor: props.on ? 'white' : 'red'

    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        marginLeft: '3px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red',
        borderRadius: '5px'
    }

    return (
        <div>

            <div onClick={swithBtn} style={onStyle}>
                On
            </div>
            <div onClick={swithBtn}  style={offStyle}>
                Off
            </div>
            <div onClick={swithBtn} style={indicatorStyle}></div>
        </div>
    )
}
