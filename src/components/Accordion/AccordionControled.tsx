import React, {useState} from 'react';

type AccordionControlledPropsType = {
    titleValue: string,
    collapsedMenu: boolean
    changeCollapse: (collapseValue: boolean)=> void
}


export const AccordionControled = (props: AccordionControlledPropsType) => {



    return (
        <div>
            <AccordionTitle collapsedMenu={props.collapsedMenu}
                            changeCollapse={props.changeCollapse}
                            title={props.titleValue}
            />
            {!props.collapsedMenu && <AccordionBody/>}
        </div>

    );
}



type AccordionTitlePropsType = {
    changeCollapse: (collapseValue: boolean)=> void
    title: string
    collapsedMenu: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const collapsMenuHandler = () => {
        props.changeCollapse(!props.collapsedMenu)
    }
    return (
        <h4 onClick={collapsMenuHandler}>{props.title}</h4>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}