import React  from 'react';
import {StateType} from "../store/store";

type ButtonSetType = {
    setNewValues:()=>void
    state:StateType
}




export function ButtonSet(props:ButtonSetType) {


const onClickButton = () => {
    props.setNewValues()
}

    return (
        <div>
            <button
                onClick={onClickButton}
                className={props.state.startValue>=0 && props.state.maxValue>=0 && props.state.maxValue>props.state.startValue? "":"disabled"}
            >
                Set
            </button>
        </div>
    )
}