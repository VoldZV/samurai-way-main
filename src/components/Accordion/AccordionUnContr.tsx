import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    defaultCollapseValue?: boolean
}

export function AccordionUnContr(props: AccordionPropsType) {

    const [collapsedMenu, setCollaps] = useState(props.defaultCollapseValue ? props.defaultCollapseValue : false)

    const collapsMenuHandler = () => setCollaps(!collapsedMenu)

    return (
        <div>
            <AccordionTitle callback={collapsMenuHandler} title={props.titleValue}/>
            {!collapsedMenu && <AccordionBody/>}
        </div>

    );
  /*  if (props.collapsedMenu) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>

        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>

    );*/
}

type AccordionTitlePropsType = {
    title: string
    callback: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h4 onClick={props.callback}>{props.title}</h4>
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
