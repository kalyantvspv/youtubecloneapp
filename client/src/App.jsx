import React from 'react';
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router} from "react-router-dom";
import Allroutes from './components/Allrouters';
import Drawbar from './components/leftsidebar/drawbar';
import { useState } from 'react';
import './App.css'


function App() {

  
  const [stylenew,setstylenew] = useState({display:"none"});
  
  
  
  function handleclick()
  {
    if(stylenew.display === "none") 
    {
     setstylenew({display:"flex"});
    }
    else{
     setstylenew({display:"none"});
    }
  }
  


  return (
    <Router>
      <Navbar handleclick={handleclick}/>
      
        <Drawbar 
        handleclick={handleclick}
        stylenew = {stylenew}/>
      
      <Allroutes />
    </Router>
  );
}

export default App;
