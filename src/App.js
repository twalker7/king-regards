import './App.css';
import React, {useState, useRef}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
const iandi = '- I&I'
const sentence =  "Truth be told I left the country to hide , Just to realize I was built for the ride , developed all these skills from inside . In the belly of the beast I was CYANIDE I&I".split(" "); 
  const [count, setCount] = useState(null);

  
  function clickName(){

    setCount(count == null ? 0 : count + 1);
  

  }

   
  return (
      <div>
       
        <div className="container" >
        <div className="counter">{sentence[count]}</div>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require('../src/assets/ravi-kumar-unsplash.jpg')} alt="chess-piece"/>
        
  
          </div>
          <Button className="explore-button" onClick={clickName}> Proceed </Button>
        
         </div>

       

    
      </div>
    
  );
}

export default App;
