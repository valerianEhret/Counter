import React, { useEffect} from 'react';

import './App.css';
import { Tablo } from "./Tablo";
import { DisplayStartValue } from "./DisplayStartValue";
import { DisplayMaxValue } from "./DisplayMaxValue";
import { Button } from "./common/Button";
import {
    incrementValueAC,
    resetSetValueAC,
} from "./redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {StateType} from './redux/reducer'





function AppWithRedux() {

    //
    // useEffect(() => {
    //     let dataFromLocal = localStorage.getItem('settingsState')
    //
    //     let objToState = dataFromLocal && JSON.parse(dataFromLocal)
    // }, [])


    const dispatch = useDispatch();

    //тип экспортируется из StoreRedux, а второй тип это тип инициализационного стейта, параметры callback state => state.counter
    const counter = useSelector<AppRootStateType, StateType>( state => state.counter  )



    const disableSetButton = counter.counterState.startValue < 0 || counter.counterState.maxValue < 0 || counter.counterState.startValue >= counter.counterState.maxValue

    const disableIncButton = counter.change || counter.counterState.currentValue === counter.counterState.maxValue

    const disableResetButton = counter.change || counter.counterState.currentValue === counter.counterState.startValue

    return (
        <div className="container">
            <div className="setCounter">

                <DisplayMaxValue
                    dispatch={dispatch} state={counter}
                />
                <DisplayStartValue
                    dispatch={dispatch} state={counter}
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
                   state={counter}
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

export default AppWithRedux;


