import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from "./AppwithRedux";
import {Provider} from "react-redux";
import {store} from "./redux/store";





export const renderTree = () => {

    ReactDOM.render(
        // оборачиваем компоненту в провайдер и отдаем в него store
       <Provider store={store}>
            <AppWithRedux/>
       </Provider>
        , document.getElementById('root')
    );
}

renderTree()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
