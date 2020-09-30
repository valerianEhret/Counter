import React, {ChangeEvent} from 'react';
import {StateType} from "./store/store";
import classes from "./DisplayStartValue.module.css";

type DisplayStartValueTyope = {
    changeStartValue:(startValue:number) => void
    state:StateType
}

export function DisplayStartValue(props:DisplayStartValueTyope) {

const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
    let startValue = Number(e.currentTarget.value)
    props.changeStartValue(startValue)
}

return (
        <div>
            StartValue:  <input  type = "number"
                                 className={props.state.maxValue > props.state.startValue && props.state.startValue>=0 ? "":classes.redError}
                                 // className={classes.redError}
                                 onChange={ onChangeStart}
                                 value={props.state.startValue}
        />
        </div>
    )
}