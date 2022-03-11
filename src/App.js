import './App.css';
import React, {useState, useRef}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [isFilled, setIsFilled] = useState('../src/assets/ravi-kumar-unsplash.jpg');
const sentence = "They can’t relate I feared debates with people who lack but are geared with hate I steered my fate and cleared my plate".split(" ");

  const [count, setCount] = useState(null);

  
  function clickName(){
    if(isFilled === '../src/assets/ravi-kumar-unsplash.jpg'){setIsFilled('../src/assets/ryan-wilson-unsplash.jpg');
    }else{
      setIsFilled('../src/assets/ravi-kumar-unsplash.jpg');
    };
    console.log(isFilled);
    setCount(count == null ? 0 : count + 1);
  

  }

   
  return (
      <div>
       
        <div className="container" >
        <div className="counter">{sentence[count]}</div>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require('../src/assets/ravi-kumar-unsplash.jpg')} alt="chess-piece"/>
        
  
          </div>
          <Button className="explore-button" onClick={clickName}> Dig </Button>
        
         </div>

       

    
      </div>
    
  );
}

export default App;
