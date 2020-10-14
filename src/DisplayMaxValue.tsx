import React, {ChangeEvent} from 'react';

import classes from "./DisplayMaxValue.module.css";
import {changeMaxValueAC, StateType} from "./redux/reducer";


type DisplayMaxValueType = {
    dispatch:Function
    state:StateType
}

export function DisplayMaxValue(props:DisplayMaxValueType) {

    const onChangeClick = (e:ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        const action = changeMaxValueAC(maxValue)
        props.dispatch(action)
    }


    return (
        <div>
            MaxValue: <input
            className={props.state.counterState.maxValue > props.state.counterState.startValue && props.state.counterState.maxValue>=0? "":classes.redError}
            type="number"
            onChange={onChangeClick}
            value={props.state.counterState.maxValue}
        />

        </div>
    )
}