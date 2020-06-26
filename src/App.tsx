import React, {useState} from 'react';

import './App.css';
import {Tablo} from "./Tablo";
import {Button1} from "./Button1";
import {Button2} from "./Button2";


function App() {
    let [value, setValue] = useState<number>(0);


    function plus() {
        if (value<5) {
            value++;
            setValue(value);
        }
    }

    function reset() {
        setValue(0)
    }

  return (
    <div className="container">
     <Tablo value={value}/>
     <Button1 plus={plus} value={value}/>
     <Button2 reset={reset} value={value}/>
    </div>
  );
}

export default App;


