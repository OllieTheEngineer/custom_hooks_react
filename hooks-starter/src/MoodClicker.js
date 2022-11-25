import React from "react";
import './MoodClicker.css'
import useToggleState from './hooks/useToggleState'

const MoodClicker = () => {
//   const [inLove, setInLove] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleMood = () => {
//     setInLove(love => !love)
//   }
//   const toggleIsDarkMode = () => {
//     setIsDarkMode(mode => !mode);
//   }
  const [inLove, toggleInLove] = useToggleState(true);
  const [darkMode, toggleDarkMode] = useToggleState(false);
    return (
        // <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
        // <h1>{inLove ? '😍' : '😫'}</h1>
        // {/* <button onClick={toggleIsInLove}>Change Mood</button>
        // <br></br>
        // <button onClick={toggleIsDarkMode}>Change Background</button> */}
        // </div>
        <div className={darkMode ? 'Clicker-dark' : 'Clicker-light'}>
           <h1>{inLove ? '😍' : '😫'}</h1> 
           <button onClick={() => {
            toggleInLove();
            toggleDarkMode()}
            }>
              Change Mood</button>
           {/* <button onClick={toggleDarkMode}>Change Background</button> */}
        </div>
    )
}

export default MoodClicker;