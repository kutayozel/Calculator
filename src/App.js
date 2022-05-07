import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const [calculation, setCalc] = useState("")
const [result, setResult] = useState("")

const operators = ['/', '*', '+', '-', ',']

const updateCalc = (value) => {
  setCalc(calculation + value)
}

function App() {
  return (
    <div>
      <Screen></Screen>
      <Button></Button>
    </div>
  );
}

export default App;
