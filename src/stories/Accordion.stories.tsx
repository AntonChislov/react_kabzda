import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "../components/Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
export const AccordionCollapsed = Template.bind({})
AccordionCollapsed.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsed: action('wont uncollapsed'),
    liList: ['1', '2', '3']
}

export const AccordionUnCollapsed = Template.bind({})
AccordionUnCollapsed.args = {
    title: 'User',
    collapsed: false,
    liList: ['1', '2', '3'],
    setCollapsed: action('wont collapsed')
}

//storybook виснет при отрисовке этого кейса

/*export const AccordionChanged: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <AccordionChanged {...args} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
AccordionChanged.args = {
    title: 'User',
    liList: ['1', '2', '3']
}*/
