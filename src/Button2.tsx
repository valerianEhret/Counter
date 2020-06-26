import React from 'react';

type Button2PropsType = {
    reset: () => void
    value:number
}


export function Button2(props:Button2PropsType) {
    return (
        <div>
            <button onClick={ () => {props.reset()}} className={props.value == 0? "disabled":""}>
                reset
            </button>
        </div>
    )
}