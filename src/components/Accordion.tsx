import React from 'react';

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    liList: string[]
    setCollapsed: (value: boolean) => void
}

export const Accordion = ({setCollapsed, title, collapsed, liList}: AccordionPropsType) => {
    return (
        <div>
            <div style={{backgroundColor: 'red', display: 'inline-block'}} onClick={() => setCollapsed(!collapsed)}>{title}</div>
            {!collapsed && <ul>
                {liList.map((li, index) => <li key={index}>{li}</li>)}
            </ul>}
        </div>
    );
}

