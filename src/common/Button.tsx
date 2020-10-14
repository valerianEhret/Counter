import React from 'react';


type ButtonPropsType = {
    onClickButton: Function
    buttonTitle: string
    buttonDisabled: boolean
    actionCreator:Function

}


export function Button(props: ButtonPropsType) {

    const onClickButton = () => {
        const action = props.actionCreator()
        props.onClickButton(action)
    }


    return (
        <div>
            <button onClick={onClickButton}
                    disabled={props.buttonDisabled}
            >
                {props.buttonTitle}
            </button>
        </div>
    )
}