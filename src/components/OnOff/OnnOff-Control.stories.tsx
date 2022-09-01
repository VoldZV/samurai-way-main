import React, {useState} from 'react';

import { OnOffControl } from './OnnOff-Control';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOffControl',
    component: OnOffControl,
}

const callback = action('on or off Clicked')

export const On = () => <OnOffControl on={true} setOn={callback}/>
export const Off = () => <OnOffControl on={false} setOn={callback}/>
export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOffControl on={value} setOn={setValue}/>
}
