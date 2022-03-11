import './App.css';
import React, {useState, useRef}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const sentence = "They can’t relate I feared debates with people who lack but are geared with hate I steered my fate and cleared my plate".split(" ");

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
