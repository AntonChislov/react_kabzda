import React, {useState} from 'react';
import {OnOff} from "../components/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('wont change')

export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OnOffChange = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} setOn={setOn}/>
}