import { useState } from "react"
import CalcLogo from "./components/CalcLogo"
import UserInput from "./components/UserInput"
import Result from "./components/Result"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10000,
    expectedReturn: 60,
    duration: 5
  })
  const isValid = userInput.duration > 0;
  function onChangeInput(value, number) {
    console.log('value : number', value, " ", number);
    setUserInput((prevValues) => {
      return { ...prevValues, [value]: number };
    })
  }
  return (
    <main className="h-full min-h-screen bg-slate-900 text-white font-sans pb-4">
      <CalcLogo />
      <UserInput userInput={userInput} onChangeInput={onChangeInput} />
      {!isValid && <p className="text-center text-lg">Please Enter duration greater than 0</p>}
      {isValid && <Result input={userInput}/>}
    </main>
  )
}

export default App
