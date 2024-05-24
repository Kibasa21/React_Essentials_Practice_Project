import { useState } from "react";
import UserInput from "./components/header/userInput";
import Result from "./components/header/result";

function App() {

  const [changeNumber, setChangeNumber] = useState([0,0,0,0])

  function handleAccounting (value, position) {
    let newNumber = [...changeNumber];
    newNumber[position] = value;
    setChangeNumber(newNumber);
  };

  return (
    <main>
      <header id="header">
        <img src="investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </header>
      <UserInput handleAccounting={handleAccounting}/>
      <Result value={changeNumber}/>
    </main>
  )
}

export default App
