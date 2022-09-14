import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [alert,setAlert] = useState (null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
      
    })

  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }

  


  // For Dark Mode
  const [mode, setMode] = useState ("light"); //wheather Darkmode enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = "grey";
      showAlert("Dark Mode has been enabled", "success");
      // Change title when clicked
      document.title = "TextUtilis-Dark Mode Enabled";
      // For blink title
      // setInterval(() => {
      //   document.title = "TextUtilis";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtilis-Dark Mode Enabled";
      // }, 4000);

    }

    else{
      setMode('light')
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title= "TextUtilis-Light Mode Enabled";
      // // setInterval(() => {
      // //   document.title = "TextUtilis";
      // // }, 8000);

      // setInterval(() => {
      //   document.title = "TextUtilis-Light Mode Enabled";
      // }, 2000);
    }
  }

  return (
    <>
    <Router>

    <Navbar title="TextUtils" abouttext="About Us" mode ={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Switch>
      {/* use exact for exact landing-best practice */}
          <Route exact path="/about"> 
            <About mode = {mode}/>
          </Route>
          
          <Route exact path="/">
            <Text showAlert={showAlert} heading="Enter Your Text to Analyze Here"  mode ={mode}/>
          </Route>
        </Switch> 
            
    
    </div>

    </Router>
    </>

 
  );
}

export default App;
