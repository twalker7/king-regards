import './App.css';
import {Row, Col} from 'react-bootstrap';



function App() {

  function clickName(){
    alert("hello!");
    console.log("hello?");
  }
   
  return (
      <body>
       
        <div className="name-container" onClick={clickName}>
          <h1 className="name"> Thomas Walker</h1>
        </div>
    
      </body>
    
  );
}

export default App;
