import React from 'react';
import './App.css';
import {StateType} from "./redux/reducer";

type TabloPropsType = {

    state:StateType
}

export function Tablo(props:TabloPropsType) {

    const change = props.state.change
    const startValue = props.state.counterState.startValue
    const maxValue = props.state.counterState.maxValue
    const currentValue = props.state.counterState.currentValue


const style = change? startValue>=0 && maxValue>=0 && maxValue>startValue? "blueMessage": "redError" : currentValue <maxValue? "":"redError"

const value = startValue>=0 && maxValue>=0 && maxValue>startValue? (change ? "Enter values and press 'set'" :currentValue): "incorrect value"


    return (
        <div  >
            <input
                className={style}
                value={ value}
            />

        </div>
    )
}
