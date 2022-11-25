import { useState } from "react";

const useToggleState = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState(state => !state)
  }
  return [ state, toggleState]
}

// Making a piece of State - starts as a boolean true or false.
// Making a function to toggle state fro t/f or f/t
// const [inLove, setInLove] = useState(true);
// const [isDarkMode, setIsDarkMode] = useState(false);
// const toggleMood = () => {
//   setInLove(love => !love)
// }
// const toggleIsDarkMode = () => {
//   setIsDarkMode(mode => !mode);
// }

export default useToggleState;


// function useToggle(initialVal = false) {
//   // call useState, "reserve piece of state"
//   const [value, setValue] = useState(initialVal);
//   const toggle = () => {
//     setValue(oldValue => !oldValue);
//   };
  
//   // return piece of state AND a function to toggle it
//   return [value, toggle];
// }