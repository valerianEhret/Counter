import React from 'react';

type ButtonPropsType = {
    onClickButton: () => void
    buttonTitle: string
    buttonDisabled: boolean

}


export function Button(props: ButtonPropsType) {

    const onClickButton = () => {
        props.onClickButton()
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