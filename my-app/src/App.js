import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
// import About from './components/About';
import Alert  from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from './components/Tabs';

function App() {
  const [mode, setMode] = useState('light'); // Dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClassess = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) =>{
    removeBodyClassess();
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#13466e"; 
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"; 
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (  
        <>
        <Navbar title="NotePad" contact="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/> 
        <div className='container my-3'>
          <TextBox heading="Write here about yourself" mode={mode} showAlert={showAlert}/>
            {/* <About mode={mode}/> */}
        </div> 
        <Tabs/>
        </>
  );
}

export default App;
