import './App.css';
import React, {useState}from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

//const sentence =  "Truth be told I left the country to hide , Just to realize I was built for this ride . Developed all these skills from inside ; In the belly of the beast I was CYANIDE".split(" "); 
const sentence =  " Mass shootings are an act of treason in a country where every citizen has an opportunity to participate in government . ".split(" "); 


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
       
        <div className="container" >
        <div className="counter">{sentence[count]}</div>
          <div className="content-section"> 
                      
    

          </div>

         </div>
        
    
      </div>
    
  );
}

export default App;
