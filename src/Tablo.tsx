import React from 'react';
import './App.css';
import {StateType} from "./redux/reducer";

type TabloPropsType = {

    state:StateType
}

export function Tablo(props:TabloPropsType) {

const style = props.state.change? props.state.counterState.startValue>=0 && props.state.counterState.maxValue>=0 && props.state.counterState.maxValue>props.state.counterState.startValue? "blueMessage": "redError" : props.state.counterState.currentValue <props.state.counterState.maxValue? "":"redError" //stateCounter.limitValue

const value = props.state.counterState.startValue>=0 && props.state.counterState.maxValue>=0 && props.state.counterState.maxValue>props.state.counterState.startValue? props.state.change ?  "Enter values and press 'set'" :props.state.counterState.currentValue: "incorrect value"

    return (
        <div  >
            <input
                className={style}
                value={ value}
            />

        </div>
    )
}
