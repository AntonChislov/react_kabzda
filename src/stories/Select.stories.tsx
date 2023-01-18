import React, {useState} from 'react';
import {Story} from "@storybook/react";
import {MySelect, SelectType} from "../components/Select";

export default {
    title: 'Select',
    component: MySelect
}

const Template: Story<SelectType> = (args) => <MySelect {...args}/>
export const MySelectBase= Template.bind({})
MySelectBase.args = {
    titleHeader: 'sleep',
    items: [
        {title: 'sleep', value: 1},
        {title: 'game', value: 2},
        {title: 'eat', value: 3},
    ]
}

// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
// export const AccordionCollapsed = Template.bind({})
// AccordionCollapsed.args = {
//     title: 'Menu',
//     collapsed: true,
//     setCollapsed: action('wont uncollapsed'),
//     liList: ['1', '2', '3']
// }
//
// export const AccordionUnCollapsed = Template.bind({})
// AccordionUnCollapsed.args = {
//     title: 'User',
//     collapsed: false,
//     liList: ['1', '2', '3'],
//     setCollapsed: action('wont collapsed')
// }

//storybook виснет при отрисовке этого кейса

/*export const AccordionChanged: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <AccordionChanged {...args} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
AccordionChanged.args = {
    title: 'User',
    liList: ['1', '2', '3']
}*/
