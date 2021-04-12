import React, {useState, createContext} from 'react'

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDarkMode, setMode] = useState(false);

  const toggleTheme = _ => setMode(!isDarkMode)
  
  return(
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
