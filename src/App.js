import './App.css';
import React, {useState, useRef}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [isFilled, setIsFilled] = useState('../src/assets/ravi-kumar-unsplash.jpg');

  const [count, setCount] = useState("");

  
  function clickName(){
    if(isFilled === '../src/assets/ravi-kumar-unsplash.jpg'){setIsFilled('../src/assets/ryan-wilson-unsplash.jpg');
    }else{
      setIsFilled('../src/assets/ravi-kumar-unsplash.jpg');
    };
    console.log(isFilled);
    setCount(count+ " hello");
  

  }

   
  return (
      <div>
       
        <div className="container" >
          <h1 className="title">Greetings!</h1>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require('../src/assets/ravi-kumar-unsplash.jpg')} alt="chess-piece"/>
        
  
          </div>
          <Button className="explore-button" onClick={clickName}> Explore </Button>
        </div>

        <div className="counter">{count}</div>

    
      </div>
    
  );
}

export default App;
