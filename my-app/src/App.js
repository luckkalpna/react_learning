import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Dark mode is enable or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#0e2b51"; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"; 
    }
  }

  return (
        <>
        <Navbar title="NotePad" contact="About Us" mode={mode} toggleMode={toggleMode}/>
        <div className='container my-3'>
          <TextBox heading="Write here about yourself" mode={mode}/>
        </div>
        </>
  );
}

export default App;
