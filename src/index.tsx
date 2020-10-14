import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {returnObjToState, store} from "./store/store";
import AppWithReducers from "./AppWithReducers";




export const renderTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <AppWithReducers store={store}  returnObjToState={returnObjToState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
