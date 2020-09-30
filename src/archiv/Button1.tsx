import React from 'react';

type Button1PropsType = {
    plus: () => void
    value:number
    limitValue:number
}


export function Button1(props:Button1PropsType) {

    const onClickButton = () => {
        props.plus()
    }


    return (
        <div>
            <button onClick={onClickButton} className={props.value <props.limitValue ? "":"disabled"}>
                inc
            </button>
        </div>
    )
}