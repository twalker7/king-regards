import './App.css';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  function clickName(){
    console.log("function executed");
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then(response=>response.json())
    .then(function(obj){
        //For Testing:
            //console.log(obj);
        var artrandIndex = Math.floor(Math.random() * obj.objectIDs.length);
        //alert("request test - return art ID:" + obj.objectIDs[artrandIndex]);
        //Select random number based on array length
        console.log("ID number: " , obj.objectIDs[artrandIndex]);
        //Use random number to select artwork ID
        var randomArtID = obj.objectIDs[artrandIndex];
        localStorage.setItem("art-id", JSON.stringify(randomArtID));
        //getArtInfo(randomArtID);
    });
  }
   
  return (
      <div>
       
        <div className="container" >
          <h1 className="title">Greetings!</h1>
          <div className="content-section"> 
                      
              <img className="profile-image" src ={require(`../src/assets/ravi-kumar-unsplash.jpg`)} alt="chess-piece"/>
        
  
          </div>
          <Button className="explore-button" onClick={clickName}> Explore </Button>
        </div>
    
      </div>
    
  );
}

export default App;
