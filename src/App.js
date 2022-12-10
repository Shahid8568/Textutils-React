import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const  [mode,setMode] = useState('light');
  const  [mode2,setMode2] = useState('light');
  const  [mode3,setMode3] = useState('light');

  const  [alert,setAlert] = useState(null);

  const showalert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500 );
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode Enable","Success");
      document.title = 'Textutils - DarkMode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enable","Success");
      document.title = 'Textutils - LightMode';
    }
   
  };
  const toggleMode2 =()=>{
    
    if(mode2 === 'light'){
      setMode2('lightgreen');
      document.body.style.backgroundColor = 'lightgreen';
      showalert("Lightgreen Mode Enable","Success");
    }
    else{
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enable","Success");
    }
   
  };
  const toggleMode3 =()=>{
    
    if(mode3 === 'light'){
      setMode3('purple');
      document.body.style.backgroundColor = 'purple';
      showalert("Purple Mode Enable","Success");
     
    }
    else{
      setMode3('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enable","Success");
    }
   
  };

  return (
    <>
    <Navbar title='Textutils' about='About Us' mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} showalert={showalert}/>

    <div className="container my-3">
      <Alerts alert={alert}/>
      <Text heading='Enter the text to analyze' mode={mode} showalert={showalert}/>
    </div>

    {/* <Router>
    <Navbar title='Textutils' about='About Us' mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} showalert={showalert}/>
  <div className="container my-3">
    <Alerts alert={alert}/>   
    <Routes>
      <Route path="/about" element = {  <About />}>
      </Route>
      <Route path="/" element={<Text heading='Enter the text to analyze' mode={mode} showalert={showalert}/>}>
      </Route>
    </Routes>
  </div>  
  </Router> */}
    </>
  );
}

export default App;
