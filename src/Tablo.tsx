import React from 'react';
import './App.css';

type TabloPropsType = {
    value:number

}

export function Tablo(props:TabloPropsType) {

    return (
        <div className={props.value <5? "":"paint" || "tablo"} >
            {props.value}
        </div>
    )
}