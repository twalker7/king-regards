import './App.css';
import React, {useState, useRef}from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from  '../src/assets/ravi-kumar-unsplash.jpg'





function App() {

  const [isFilled, setIsFilled] = useState('../src/assets/ravi-kumar-unsplash.jpg');

  const [count, setCount] = useState("hello");

  
  function clickName(){
    if(isFilled === '../src/assets/ravi-kumar-unsplash.jpg'){setIsFilled('../src/assets/ryan-wilson-unsplash.jpg');
    }else{
      setIsFilled('../src/assets/ravi-kumar-unsplash.jpg');
    };
    console.log(isFilled);
    setCount(count+ " hello");
    function getArtwork(){
      //Fill art box with "stand-by" gif for user's entertainment
     // $("#painting").append('<iframe src="https://giphy.com/embed/LzCREPXRTqtdC" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-LzCREPXRTqtdC"></a></p>');
      //Fetch url for full list of art in API
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
          getArtInfo(randomArtID);
      });
  }
    


  }

  function getArtInfo(artID) {
    //Use artwork ID to fetch url for all information about selected art
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + artID )
    .then(response=>response.json())
    .then(function(obj) {
        //Find image link
        var artImage = obj.primaryImage;
        //For Testing:
            //console.log("Image link: ", artImage);
        //If statement to move ignore artwork with no image
        if (artImage === "") {
           // clearArt();
           // getArtwork(); 
        } else {
            //clearArt();
           // $("#painting").append('<img class="artwork-image" src="' + artImage +'"></img>'); 
        }
        
    });
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
