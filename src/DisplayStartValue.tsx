import React, {ChangeEvent} from 'react';
import classes from "./DisplayStartValue.module.css";
import {changeStartValueAC, StateType} from "./redux/reducer";


type DisplayStartValueTyope = {
    dispatch:Function
    state:StateType
}

export function DisplayStartValue(props:DisplayStartValueTyope) {

const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
    let startValue = Number(e.currentTarget.value)
    const action = changeStartValueAC(startValue)
    props.dispatch(action)
}

return (
        <div>
            StartValue:  <input  type = "number"
                                 className={props.state.counterState.maxValue > props.state.counterState.startValue && props.state.counterState.startValue>=0 ? "":classes.redError}
                                 onChange={ onChangeStart}
                                 value={props.state.counterState.startValue}
        />
        </div>
    )
}