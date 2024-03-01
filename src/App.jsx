import React,{ useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  //Alternatively, use separate state for each input (less desireable)
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          //One of the keys in state obj -> newValue | "+" converts str to num
          [inputIdentifier]: +newValue
      };
  });
}

  const validateInput = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!validateInput && <p className="center">"Please enter a duration as a number grater than zero!</p>}
      {validateInput && <Results input={userInput} />}
    </>
  )
}

export default App
