import React, {MouseEvent, useState} from "react";
import cl from './OnOff.module.css'

type OnOffType = {
    on: boolean
}

export const OnOff3 = () => {

    const [on, setOn] = useState(true)

    const swithBtn = (e: MouseEvent<HTMLDivElement>) => {
        if(e.currentTarget.innerText === 'On') {setOn(true)}
        else {setOn(false)}
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',

    }

    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'

    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        marginLeft: '3px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
        borderRadius: '5px'
    }

    // В onClick можно просто в виде callback передавать setOn с нужным значением
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

export const OnOff2 = (props: OnOffType) => {

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

            <div style={onStyle}>
                On
            </div>
            <div style={offStyle}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}





export const OnOff1 = (props: OnOffType) => {
    return (
        <div className={cl.container}>

            <div className={`${cl.rectangle_button} ${props.on && cl.on}`}>
                On
            </div>
            <div className={`${cl.rectangle_button} ${!props.on && cl.off}`}>
                Off
            </div>
            <div className={`${cl.circle} ${(props.on && cl.on) || (!props.on && cl.off)}`}></div>
        </div>
    )
}

