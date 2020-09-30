import React, {ChangeEvent} from 'react';
import {StateType} from "./store/store";
import classes from "./DisplayMaxValue.module.css";


type DisplayMaxValueType = {
    changeMaxValue:(maxValue:number) => void
    state:StateType
}





export function DisplayMaxValue(props:DisplayMaxValueType) {

    const onChangeClick = (e:ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        props.changeMaxValue(maxValue)
    }


    return (
        <div>
            MaxValue: <input
            className={props.state.maxValue > props.state.startValue && props.state.maxValue>=0? "":classes.redError}
            type="number"
            onChange={onChangeClick}
            value={props.state.maxValue}
        />

        </div>
    )
}