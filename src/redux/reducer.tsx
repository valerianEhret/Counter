import React from 'react';

// enum Action type
export enum ACTION_TYPE {
    INCREMENT_VALUE = "INCREMENT_VALUE",
    RESET_SET_VALUE = "RESET_SET_VALUE",
    CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE",
    CHANGE_START_VALUE = "CHANGE_START_VALUE",
}

// Action Types
export type IncrementValueActionType = {
    type: ACTION_TYPE.INCREMENT_VALUE
}

export type ResetSetValueActionType = {
    type:ACTION_TYPE.RESET_SET_VALUE
}

export type ChangeMaxValueActionType = {
    type: ACTION_TYPE.CHANGE_MAX_VALUE
    maxValue:number
}

export type ChangeStartValueActionType = {
    type: ACTION_TYPE.CHANGE_START_VALUE
    startValue:number
}



// General Action Type
export type ActionsType =
    IncrementValueActionType
    | ResetSetValueActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType




// ActionCreators
export const incrementValueAC = ():IncrementValueActionType => {
    return {type:ACTION_TYPE.INCREMENT_VALUE}
}

export const resetSetValueAC = ():ResetSetValueActionType => {
    return {type:ACTION_TYPE.RESET_SET_VALUE}
}

export const changeMaxValueAC = (maxValue:number):ChangeMaxValueActionType => {
    return {type:ACTION_TYPE.CHANGE_MAX_VALUE, maxValue}
}

export const changeStartValueAC = (startValue:number):ChangeStartValueActionType => {
    return {type:ACTION_TYPE.CHANGE_START_VALUE, startValue}
}


//types
type CounterStateType = {
    startValue:number
    maxValue:number
    currentValue:number
}

export type StateType = {
    counterState:CounterStateType
    change:boolean
}

//initial State
export const initialState:StateType = {
  counterState: {
      startValue: 0,
      maxValue: 5,
      currentValue: 0,
  },
    change:false,
}


// Reducers

export const counterReducer = (state:StateType = initialState, action:ActionsType ):StateType =>{
    switch (action.type) {
        case ACTION_TYPE.INCREMENT_VALUE: {
           return {...state, counterState:{...state.counterState, currentValue:state.counterState.currentValue+1} }
        }

        case ACTION_TYPE.RESET_SET_VALUE: {
            return {...state, counterState:{...state.counterState, currentValue:state.counterState.startValue}, change:false}
        }

        case ACTION_TYPE.CHANGE_MAX_VALUE:{
            return {...state, counterState:{...state.counterState, maxValue:action.maxValue}, change:true}
        }

        case ACTION_TYPE.CHANGE_START_VALUE: {
            return {...state, counterState: {...state.counterState, startValue:action.startValue}, change:true}
        }

        default:
            return state;
    }
}