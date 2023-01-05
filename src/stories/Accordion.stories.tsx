import React, {useState} from 'react';
import {Accordion} from "../components/Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}


export const AccordionCollapsed = () => <Accordion title={'Menu'} collapsed={true} liList={['1', '2', '3']} setCollapsed={action('wont uncollapsed')}/>

export const AccordionUnCollapsed = () => <Accordion title={'Menu'} collapsed={false} liList={['1', '2', '3']} setCollapsed={action('wont collapsed')}/>

export const AccordionChange = () => {
const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Menu'} collapsed={collapsed} liList={['1', '2', '3']} setCollapsed={setCollapsed}/>
}