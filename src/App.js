import logo from './logo.svg';
import './App.css';
import DarkMode from './Components/DarkMode';
import React,{createContext} from 'react';

export const DarkTheme = React.createContext();
function App() {
  return (
    <div className="App" >
<DarkTheme.Provider value="dark">

    <DarkMode />
</DarkTheme.Provider>
    </div>
  );
}

export default App;
