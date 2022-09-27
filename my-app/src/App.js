import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert  from './components/Alert';
import React, {useState} from 'react';

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

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#0e2b51"; 
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
        <Navbar title="NotePad" contact="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/> 
        <div className='container my-3'>
          <TextBox heading="Write here about yourself" mode={mode} showAlert={showAlert}/>
        </div>
        </>
  );
}

export default App;
