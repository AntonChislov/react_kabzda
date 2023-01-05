import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from "../components/OnOff";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'OnOff',
    component: OnOff
}

/*export const OnOffChanging: Story<OnOffPropsType> = (args) => {
    const [on, setOn] = useState(true)
    return <OnOff {...args} setOn={setOn} on={on}/>
}*/

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>

export const OnOffChanging = Template.bind({})
OnOffChanging.args = {
    on: true,
    setOn: action('changing')
}
