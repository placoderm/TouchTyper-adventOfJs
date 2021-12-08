import "./App.css";
import { useState, useEffect } from "react";
import KeyButton from "./KeyButton.js";
import legalizeClassName from "./legalizeClassName";
import { keyboardMap } from "./keyboardMap.js";
import snackbar from "snackbar";

snackbar.duration = 1000;
snackbar.gap = 50;

function App() {
  let [wrong, setWrong] = useState(0);
  let [right, setRight] = useState(0);
  let [randomKey, setRandomKey] = useState("");
  document.title = "TouchTyping from Advent of js";

  function getRandom() {
    const ranKey = Math.floor(Math.random() * keyboardMap.length);
    const keyName = "." + legalizeClassName(keyboardMap[ranKey]);
    console.log(keyName);
    const keyClass = document.querySelector(keyName);
    keyClass.classList.toggle("active");
    return ranKey;
  }

  useEffect(() => {
    setRandomKey(getRandom());
    console.log("randomKey " + randomKey);
  }, []);

  function correctTheKeyName(deviceKeyName) {
    if (deviceKeyName === "CapsLock") {
      return "CAPS";
    } else if (deviceKeyName === "Backspace") {
      return "DEL";
    }
    return deviceKeyName;
  }

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === "Escape") {
        setWrong(0);
        setRight(0);
        return;
      }
      if (correctTheKeyName(event.key).toLowerCase() === keyboardMap[randomKey].toLowerCase()) {
        const keyName = "." + legalizeClassName(keyboardMap[randomKey]);
        const keyClass = document.querySelector(keyName);
        keyClass.classList.toggle("active");
        setRandomKey(getRandom());
        setRight(right + 1);
      } else {
        setWrong(wrong + 1);
        snackbar.show("No, That was " + event.key);
        //alert("KEYBOARD incorrect " + event.key + " looking for " + keyboardMap[randomKey] + " random " + randomKey);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  function percentCorrect(right, wrong) {
    if ((right === 0) & (wrong === 0)) {
      return 100;
    }
    let total = right + wrong;
    let percent = (right / total) * 100;

    return Math.floor(percent);
  }

  return (
    <div id="the-app">
      <div id="keyboard">
        {keyboardMap.map(key => (
          <KeyButton key={key}>{key}</KeyButton>
        ))}
      </div>
      <div id="score">
        <div>Correct: {right}</div>
        <div>Incorrect: {wrong}</div>
        <div>Percent Correct: {percentCorrect(right, wrong)}%</div>
        <div>
          <em>Press Esc to clear</em>
        </div>
      </div>
    </div>
  );
}

export default App;
