import './App.css';
import React, {useState}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

const sentence =  "Truth be told I left the country to hide , Just to realize I was built for this ride . Developed all these skills from inside ; In the belly of the beast I was CYANIDE I&I".split(" "); 
  const [count, setCount] = useState(null);

  
  function clickName(){

    setCount(count == null ? 0 : count + 1);
    

  }
  function resetCount(){
    setCount(count * null);
  }
   
  return (
      <div>
       
        <div className="container" >
        <div className="counter">{sentence[count]}</div>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require('../src/assets/ravi-kumar-unsplash.jpg')} alt="chess-piece"/>
        

          </div>
          <Button className="explore-button" onClick={clickName}> Feed </Button>
          <br/>
          <Button className="explore-button" onClick={resetCount}>   Reset   </Button>

         </div>
         

       

    
      </div>
    
  );
}

export default App;
