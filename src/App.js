import './App.css';
import {Row, Col} from 'react-bootstrap';



function App() {

  function clickName(){
    alert("hello!");
    console.log("hello?");
  }
   
  return (
      <div>
       
        <div className="container" onClick={clickName}>
          <h1 className="title">Greetings!</h1>
          <div className="content-section"> 
          <Row> 
          
          <Col></Col> 
          <Col>             
              <img className="profile-image " src ={require(`../src/assets/ravi-kumar-unsplash.jpg`)} alt="headshot"/>
          </Col> 
          <Col></Col>
      </Row>
  
          </div>
        </div>
    
      </div>
    
  );
}

export default App;
