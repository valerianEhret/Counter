import React, { useEffect } from 'react';

import './App.css';
import { Tablo } from "./Tablo";
import { DisplayStartValue } from "./DisplayStartValue";
import { DisplayMaxValue } from "./DisplayMaxValue";
import { StateType, store, StoreType } from "./store/store";
import { Button } from "./common/Button";


type AppType = {
    store: StoreType
    returnObjToState: (objToState: StateType) => StateType
}


function App(props: AppType) {

    //
    useEffect(() => {
        let dataFromLocal = localStorage.getItem('settingsState')

        let objToState = dataFromLocal && JSON.parse(dataFromLocal)
        debugger
    }, [])

    const disableSetButton = props.store.settingsState.startValue < 0 || props.store.settingsState.maxValue < 0 || props.store.settingsState.startValue >= props.store.settingsState.maxValue
    const disableIncButton = props.store.counterState.value === props.store.settingsState.maxValue      //counterState.limitValue
    const disableResetButton = props.store.counterState.value === props.store.settingsState.startValue

    return (
        <div className="container">
            <div className="setCounter">
                {/*<DisplayMaxValue changeMaxValue={props.store.changeMaxValue.bind(store)} state={props.store.settingsState} />*/}
                {/*<DisplayStartValue changeStartValue={props.store.changeStartValue.bind(store)}*/}
                {/*    state={props.store.settingsState} />*/}
                {/*<Button*/}
                {/*    onClickButton={props.store.setNewValues.bind(store)}*/}
                {/*    buttonDisabled={disableSetButton}*/}
                {/*    buttonTitle={"set"}*/}
                {/*/>*/}
            </div>
            <div className="counter">
                {/*<Tablo*/}
                    // stateCounter={props.store.counterState}
                    // state={props.store.settingsState}
                    // change={props.store.change}
                {/*/>*/}
                {/*<Button*/}
                {/*    onClickButton={props.store.plus.bind(store)}*/}
                {/*    buttonDisabled={disableIncButton}*/}
                {/*    buttonTitle={"inc"}*/}
                {/*/>*/}
                {/*<Button*/}
                {/*    onClickButton={props.store.reset.bind(store)}*/}
                {/*    buttonDisabled={disableResetButton}*/}
                {/*    buttonTitle={"reset"}*/}
                {/*/>*/}
            </div>

        </div>
    );
}

export default App;


