import {useState, KeyboardEvent, useEffect, useReducer} from "react";
import s from './Select.module.css'

export type SelectType = {
    items: Array<{ title: string, value: number }>
}

const SET_TITLE = 'SET_TITLE'
const SET_HOVER = 'SET_HOVER'
const SET_COLLAPSED = 'SET_COLLAPSED'
const SET_INITIAL_HOVER = 'SET_INITIAL_HOVER'

export type StateType = {
    title: string
    collapsed: boolean
    hover: string | null
}

type ActionType = {
    type: string
    title?: string
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                //@ts-ignore
                title: action.title
            }
        case SET_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        case SET_INITIAL_HOVER:
            return {
                ...state,
                hover: state.title
            }
        case SET_HOVER:
            return {
                ...state,
                //@ts-ignore
                hover: action.title
            }
        default:
            throw new Error('not find action type')
    }
}

export const MySelect = ({items}: SelectType) => {

    const initialState: StateType = {
        title: items[1].title,
        collapsed: false,
        hover: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({type: SET_INITIAL_HOVER})
    }, [state.title])

    const collapsedHandler = () => {
        dispatch({type: SET_COLLAPSED})
    }

    const changeTitle = (title: string) => {
        dispatch({type: SET_TITLE, title})
        dispatch({type: SET_COLLAPSED})
    }

    const hoverItem = (title: string) => {
        if (title) dispatch({type: SET_HOVER, title})
    }

    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                const nextEl = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                if (nextEl && items[i].title === state.hover) {
                    dispatch({type: SET_TITLE, title: nextEl.title})
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            dispatch({type: SET_COLLAPSED})
        }
    }

    return (
        <div style={{marginLeft: '30px'}}>
            <div tabIndex={0} onKeyUp={onKey} className={s.title} onClick={collapsedHandler}>{state.title}</div>
            {!state.collapsed && <div className={s.options}>
                {items.map(i => <div onMouseEnter={() => hoverItem(i.title)}
                                     className={state.hover === i.title ? s.active : ''}
                                     onClick={() => changeTitle(i.title)}
                                     key={i.value}>{i.title}</div>)}
            </div>}
        </div>
    )
}