import React, {ChangeEvent, useEffect, useReducer} from 'react';

import './App.css';
import { Tablo } from "./Tablo";
import { DisplayStartValue } from "./DisplayStartValue";
import { DisplayMaxValue } from "./DisplayMaxValue";
import { StateType, StoreType } from "./store/store";
import { Button } from "./common/Button";
import {
    counterReducer,
    incrementValueAC,
    initialState,
    resetSetValueAC,
    // setNewValuesAC
} from "./redux/reducer";



type AppType = {
    store: StoreType
    returnObjToState: (objToState: StateType) => StateType
}


function AppWithReducers(props: AppType) {

    //
    useEffect(() => {
        let dataFromLocal = localStorage.getItem('settingsState')

        let objToState = dataFromLocal && JSON.parse(dataFromLocal)
    }, [])


    let [state, dispatch] = useReducer(counterReducer, initialState)

    const disableSetButton = state.counterState.startValue < 0 || state.counterState.maxValue < 0 || state.counterState.startValue >= state.counterState.maxValue

    const disableIncButton = state.change || state.counterState.currentValue === state.counterState.maxValue

    const disableResetButton = state.change || state.counterState.currentValue === state.counterState.startValue

    return (
        <div className="container">
            <div className="setCounter">

                <DisplayMaxValue
                    dispatch={dispatch} state={state}
                />
                <DisplayStartValue
                    dispatch={dispatch} state={state}
                />
                <Button
                    onClickButton={dispatch}
                    actionCreator={resetSetValueAC}
                    buttonDisabled={disableSetButton}
                    buttonTitle={"set"}
                />
            </div>
            <div className="counter">
                <Tablo
                   state={state}
                />
                <Button
                    onClickButton={dispatch}
                    actionCreator={incrementValueAC}
                    buttonDisabled={disableIncButton}
                    buttonTitle={"inc"}
                />
                <Button
                    onClickButton={dispatch}
                    actionCreator={resetSetValueAC}
                    buttonDisabled={disableResetButton}
                    buttonTitle={"reset"}
                />
            </div>

        </div>
    );
}

export default AppWithReducers;


