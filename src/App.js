
import './App.css';
// import About from './components/About';
import Textform from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() { 

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
         document.body.style.backgroundColor = '#2B3856';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
        }
  }
  

  return (
    <>

        <Navbar title= "TextUtiles"  mode = {mode} toggleMode = {toggleMode}/> 
        <div className="container  my-3 ">
        <Textform heading = "Enter the text to analyzie below" mode = {mode}/>
          {/* <About/> */}
        </div>
 </>
  );
}

export default App;
