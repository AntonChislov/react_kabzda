import {reducer, StateType} from "./Select";

test('', () => {
    //data
    const state: StateType = {
        collapsed: false,
        title: 'jdjd',
        hover: 'wer'
    }
    //action
    const newState = reducer(state, {type: 'SET_COLLAPSED'})
    //expected
    expect(newState.collapsed).toBe(true)
})