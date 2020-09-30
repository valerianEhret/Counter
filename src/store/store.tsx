import React, {useEffect, useState} from 'react';
import {renderTree} from "../index";



export type StoreType = {
    settingsState:StateType
    changeMaxValue: (maxValue: number) => void
    changeStartValue:(startValue: number) => void
    counterState:StateCounterType
    plus:()=>void
    reset:()=>void
    setNewValues:()=>void
    change:boolean
    // state: any
    
}


function saveStateToLocalStorage(settingsState: StateType) {
    localStorage.setItem('settingsState', JSON.stringify(settingsState))
}

export function returnObjToState(objToState:StateType) {
return objToState;
}

export type MessagesType = {
    incorrectValueMessage:string
    setValuesMessage:string
}

export type StateType = {
    startValue: number
    maxValue: number
}

export type StateCounterType = {
    value: number
    // limitValue: number
}




export const store: StoreType = {

    settingsState: {
        startValue: 0,
        maxValue: 5,
    },
    counterState: {
        value: 0,
        // limitValue: 5
    },
    change:false,
    changeMaxValue(maxValue: number) {
        this.settingsState.maxValue = maxValue
        this.change = true
        saveStateToLocalStorage(this.settingsState)
        renderTree()
    },
    changeStartValue(startValue: number) {
        this.settingsState.startValue = startValue
        this.change = true
        saveStateToLocalStorage(this.settingsState)
        renderTree()
    },

    plus() {
        if (this.counterState.value < this.settingsState.maxValue) { //this.counterState.limitValue
            this.counterState.value++
        }
        renderTree()
    },
    reset() {
        this.counterState.value = this.settingsState.startValue
        renderTree()
    },
    setNewValues() {
        this.counterState.value = this.settingsState.startValue
        // this.counterState.limitValue = this.settingsState.maxValue
        this.change = false
        renderTree()
    }


}

