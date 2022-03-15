import React, { useState, useEffect } from "react";
import "./App.module.css";

// components
import Header from "./components/Header";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import Key from "./components/Key";
import ThemeSwitch from "./components/ThemeSwitch";

const OPERANDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [theme, setTheme] = useState("theme-1");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  const appendNumber = (number) => {
    setDisplayValue(prevValue => prevValue + number);
  };

  const deleteNumber = () => {
    setDisplayValue(prevValue => prevValue.slice(0, -1));
  };

  const resetDisplay = () => {
    setDisplayValue("");
  };

  const calcResult = () => {
    //...
  };

  return (
    <div className="App" data-theme={theme}>
      <Header>
        <ThemeSwitch setTheme={setTheme} />
      </Header>
      <Display displayValue={displayValue} />
      <KeyPad>
        {OPERANDS.map(character => 
          <Key key={character} id={`key-${character}`} handleClick={appendNumber}>
            {character}
          </Key>  
        )}
        <Key id="key-sum">
          +
        </Key>
        <Key id="key-subtraction">
          -
        </Key>
        <Key id="key-multiplication">
          x
        </Key>
        <Key id="key-division">
          /
        </Key>
        <Key id="key-dot">
          .
        </Key>
        <Key id="key-delete" type="text" handleClick={deleteNumber}>
          DEL
        </Key>
        <Key id="key-reset" type="text" large handleClick={resetDisplay}>
          RESET
        </Key>
        <Key id="key-equals" type="special" large handleClick={calcResult}>
          =
        </Key>
      </KeyPad>
    </div>
  );
}

export default App;
