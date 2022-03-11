import './App.css';
import React, {useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [isFilled, setIsFilled] = useState(false);

  function clickName(){
    if(!isFilled){setIsFilled(true)
    }else{
      setIsFilled(false)
    };
    console.log(isFilled);
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then(response=>response.json())
    .then(function(respObj){
        //For Testing:
            //console.log(respObj);
        var artrandIndex = Math.floor(Math.random() * respObj.objectIDs.length);
        //alert("request test - return art ID:" + obj.objectIDs[artrandIndex]);
        //Select random number based on array length
        console.log("ID number: " , respObj.objectIDs[artrandIndex]);
        //Use random number to select artwork ID
        var randomArtID = respObj.objectIDs[artrandIndex];
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
