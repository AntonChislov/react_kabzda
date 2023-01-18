import {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

export type SelectType = {
    items: Array<{ title: string, value: number }>
    titleHeader: string
}

export const MySelect = ({items, titleHeader}: SelectType) => {

    const [title, setTitle] = useState(titleHeader)
    const [collapsed, setCollapsed] = useState(false)
    const [hover, setHover] = useState(title)

    useEffect(() => setHover(title), [title])

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    const changeTitle = (title: string) => {
        setTitle(title)
        setCollapsed(true)
    }

    const hoverItem = (title: string) => {
        setHover(title)
    }

    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                const nextEl = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                if (nextEl && items[i].title === hover) {
                    setTitle(nextEl.title)
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(true)
        }
    }

    return (
        <div style={{marginLeft: '30px'}}>
            <div tabIndex={0} onKeyUp={onKey} className={s.title} onClick={collapsedHandler}>{title}</div>
            {!collapsed && <div className={s.options}>
                {items.map(i => <div onMouseEnter={() => hoverItem(i.title)}
                                     className={hover === i.title ? s.active : ''}
                                     onClick={() => changeTitle(i.title)}
                                     key={i.value}>{i.title}</div>)}
            </div>}
        </div>
    )
}