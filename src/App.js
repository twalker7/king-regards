import './App.css';



function App() {

  function clickName(){
    alert("hello!");
    console.log("hello?");
  }
   
  return (
      <div className="main">
        <div className="name-container" onClick={clickName}>
          <h1 className="name"> Thomas Walker</h1>
        </div>
        <div className="panel"></div>
      </div>
    
  );
}

export default App;
