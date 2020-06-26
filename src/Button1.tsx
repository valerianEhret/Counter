import React from 'react';

type Button1PropsType = {
    plus: () => void
    value:number
}


export function Button1(props:Button1PropsType) {
    return (
        <div>
            <button onClick={ () => {props.plus()}} className={props.value <5? "":"disabled"}>
                inc
            </button>
        </div>
    )
}