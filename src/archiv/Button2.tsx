import React from 'react';

type Button2PropsType = {
    reset: () => void
    value:number
    startValue:number
}


export function Button2(props:Button2PropsType) {

   const onClickButton = () => {
       props.reset()
   }


    return (
        <div>
            <button onClick={ onClickButton}
                    className={props.value !== props.startValue? "":"disabled"}
            >
                reset
            </button>
        </div>
    )
}