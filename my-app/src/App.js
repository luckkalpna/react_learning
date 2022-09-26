import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
        <>
        <Navbar title="NotePad" contact="About Us"/>
        <div className='container my-3'>
          <TextBox heading="Write here about yourself"/>
        </div>
        </>
  );
}

export default App;
