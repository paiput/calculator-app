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
  const [inputValue, setInputValue] = useState("");
  const [operator, setOperator] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("theme-1");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  const appendDigit = (digit) => {
    if (digit === "." && displayValue.includes(digit)) return;
    setDisplayValue(prevValue => prevValue + digit);
  };

  const deleteNumber = () => {
    setDisplayValue(prevValue => prevValue.slice(0, -1));
  };

  const resetDisplay = () => {
    setDisplayValue("");
    setInputValue("");
    setOperator("");
    setError("");
  };

  const handleOperation = (selectedOperator) => {
    if (operator) {
      setOperator(selectedOperator);
      setDisplayValue("");
      return;
    }
    setOperator(selectedOperator);
    setInputValue(displayValue);
    setDisplayValue("");
  };
  
  const calcResult = () => {
    if (!inputValue && !displayValue && operator) {
      setError("Error: syntax error");
    }

    let result;

    if (operator === "+") {
      result = Number(inputValue) + Number(displayValue);
    } else if (operator === "-") {
      result = Number(inputValue) - Number(displayValue);
    } else if (operator === "x") {
      result = Number(inputValue) * Number(displayValue);
    } else if (operator === "/") {
      result = Number(inputValue) / Number(displayValue);
    } else return;

    if (result === Infinity || isNaN(result)) {
      setError("Error: math error");
    }

    setInputValue("" + result);
  };

  return (
    <div className="calculator" data-theme={theme}>
      <Header>
        <ThemeSwitch setTheme={setTheme} />
      </Header>
      <Display 
        displayValue={displayValue} 
        inputValue={inputValue} 
        operator={operator}
        error={error}
      />
      <KeyPad>
        {OPERANDS.map(character => 
          <Key key={character} id={`key-${character}`} handleClick={appendDigit}>
            {character}
          </Key>  
        )}
        <Key id="key-sum" handleClick={handleOperation}>
          +
        </Key>
        <Key id="key-subtraction" handleClick={handleOperation}>
          -
        </Key>
        <Key id="key-multiplication" handleClick={handleOperation}>
          x
        </Key>
        <Key id="key-division" handleClick={handleOperation}>
          /
        </Key>
        <Key id="key-dot" handleClick={appendDigit}>
          .
        </Key>
        <Key id="key-delete" type="text" handleClick={deleteNumber}>
          del
        </Key>
        <Key id="key-reset" type="text" large handleClick={resetDisplay}>
          reset
        </Key>
        <Key id="key-equals" type="special" large handleClick={calcResult}>
          =
        </Key>
      </KeyPad>
    </div>
  );
}

export default App;
