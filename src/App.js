import React, { useState, useEffect } from "react";
import "./App.module.css";

// components
import Header from "./components/Header";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import Key from "./components/Key";
import ThemeSwitch from "./components/ThemeSwitch";

const DEFAULT_KEYS = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "+", "-", "x", "/", "."
];
const TEXT_KEYS = ["DEL", "RESET"];
const SPECIAL_KEYS = ["="];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [theme, setTheme] = useState("theme-1");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <Header>
        <ThemeSwitch setTheme={setTheme} />
      </Header>
      <Display displayValue={displayValue} />
      <KeyPad>
        {DEFAULT_KEYS.map(character =>
          <Key key={character} type="default" setDisplayValue={setDisplayValue}>
            {character}
          </Key>
        )}
        {TEXT_KEYS.map(character =>
          <Key key={character} type="text" setDisplayValue={setDisplayValue}>
            {character}
          </Key>
        )}
        {SPECIAL_KEYS.map(character =>
          <Key key={character} type="special" setDisplayValue={setDisplayValue}>
            {character}
          </Key>
        )}
      </KeyPad>
    </div>
  );
}

export default App;
