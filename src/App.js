import React, { useState } from 'react';
import Counter from "./Counter"
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter<br />
      <Counter initialCount={0} /><br />
      Counter Hooks<br />
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => { return prevTheme === 'red' ? 'blue' : 'red' })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;


