import './App.css';
import React, {useState}from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

//const sentence =  "Truth be told I left the country to hide , Just to realize I was built for this ride . Developed all these skills from inside ; In the belly of the beast I was CYANIDE".split(" "); 
const sentence =  "Hello World"

const [count, setCount] = useState(null);

  
  function clickName(){

    setInterval(setCount(count == null ? 0 : count + 1), 1000) ;

      if(count > sentence.length){
        clearInterval();
      }    

  }
  function resetCount(){
    setCount(count * null);
  }
   
  return (
      <div>
               <div className="statement-upper"><h1 className="statement-text"> Thomas Walker </h1></div>  

        <div className="container" >

          <div className="content-section">
            <div className="upper">
             ≈
            </div>  
            <div className="middle">
            ∆
          </div>  
            <div className="lower">
            π
          </div>   

    

          </div>

         </div>
        
    <div className="flying-shape1"> </div>
    <div className="flying-shape2"> </div>

      </div>
    
  );
}

export default App;


//          <div className="statement-lower"><h4> The only way to respect a broken system is to fix it </h4></div>  
