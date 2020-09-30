import React, {ChangeEvent} from 'react';
import './App.css';
import {MessagesType, StateCounterType, StateType} from "./store/store";

type TabloPropsType = {
    stateCounter:StateCounterType
    state:StateType
    // messages:MessagesType
    change:boolean
    // currentMessage:string


}

export function Tablo(props:TabloPropsType) {

const style = props.change? props.state.startValue>=0 && props.state.maxValue>=0 && props.state.maxValue>props.state.startValue? "blueMessage": "redError" : props.stateCounter.value <props.state.maxValue? "":"redError" //stateCounter.limitValue

const value = props.state.startValue>=0 && props.state.maxValue>=0 && props.state.maxValue>props.state.startValue? props.change ?  "Enter values and press 'set'" :props.stateCounter.value: "incorrect value"
    return (
        <div  >
            <input
                className={style}
                // className={props.stateCounter.value <props.stateCounter.limitValue? "":"redError"}
                value={ value}
                // value = {props.currentMessage !== "" ? props.currentMessage : props.stateCounter.value}
                // value={ props.change ?  "Enter values and press 'set'" :props.stateCounter.value}
                // value={ props.state.startValue>=0 && props.state.maxValue>=0 && props.state.maxValue>props.state.startValue? props.stateCounter.value: props.messages.incorrectValueMessage}
            />
            {/*{props.value}*/}
        </div>
    )
}
