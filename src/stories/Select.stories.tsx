import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {BasicSelect} from "../components/SelectMUI";

export default {
    title: 'BasicSelect',
    component: BasicSelect
}

// export const OnOffChanging: Story<OnOffPropsType> = (args) => {
//     const [on, setOn] = useState(true)
//     return <OnOff {...args} setOn={setOn} on={on}/>
// }

// const Template: Story<> = (args) => <BasicSelect {...args}/>
//
// export const OnOffChanging = Template.bind({})
// OnOffChanging.args = {
//     on: true,
//     setOn: action('changing')
// }
