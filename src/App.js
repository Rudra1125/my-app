// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or no t
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled");
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          {/* {/users--> component 1} */}
          {/* /users/home --->-->component 2 */}
          {/* React uses partial matching so we have to use exact keyword to match exactly */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/> }>
            </Route>
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App;
