import './App.css';
import {Row, Col} from 'react-bootstrap';



function App() {

  function clickName(){
    alert("hello!");
    console.log("hello?");
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then( resp => resp.json())
    .then(function(data){
      console.log(data);
      console.log(data.drinks[0].strDrink);
    })
  }
   
  return (
      <div>
       
        <div className="container" onClick={clickName}>
          <h1 className="title">Greetings!</h1>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require(`../src/assets/ravi-kumar-unsplash.jpg`)} alt="chess-piece"/>
        
  
          </div>
        </div>
    
      </div>
    
  );
}

export default App;
