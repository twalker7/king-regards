import './App.css';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  function clickName(){
    alert("hello!");
    console.log("hello?");
    fetch('https://api.scripture.api.bible/v1/swagger.json')
    .then( resp => resp.json())
    .then(function(data){
      console.log(data);
      console.log(data.drinks[0].strDrink);
    })
  }
   
  return (
      <div>
       
        <div className="container" >
          <h1 className="title">Greetings!</h1>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require(`../src/assets/ravi-kumar-unsplash.jpg`)} alt="chess-piece"/>
        
  
          </div>
          <Button class="explore-button" onClick={clickName}> Explore </Button>
        </div>
    
      </div>
    
  );
}

export default App;
