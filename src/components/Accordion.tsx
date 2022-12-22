import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    liList: string[]
}

export const Accordion = ({title, collapsed, liList}: AccordionPropsType) => {
    return (
        <div>
            <div>{title}</div>
            {!collapsed && <ul>
                {liList.map((li, index) => <li key={index}>{li}</li>)}
            </ul>}
        </div>
    );
}

