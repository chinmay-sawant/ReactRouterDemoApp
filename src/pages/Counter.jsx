import { useState } from "react";

export const Counter = () => {
  const hstyle = {
    color: 'black',
    fontSize: '100px',
    textAlign: 'center'
  };

  const containerStyle = {
    width: '1000px',
  };


  const [counterValue,setCounterValue] = useState(0);
  const decreaseKounter = () =>{
    setCounterValue(prev => prev-1);
  }
  const resetKounter = () =>{
    setCounterValue(0);
  }
  const increaseKounter = () =>{
    setCounterValue(prev => prev+1);
  }
  
  
  return (<>
  <div style={containerStyle}>
  <div className="container text-center" >
    <div className="row align-items-start">
      <div className="col">
       <br/>
      </div>
      <div className="col">
       <h1 style={hstyle}>{counterValue}</h1>
      </div>
      <div className="col">
      <br/> <br/> <br/>
      </div>
    </div>
  </div>
  <div className="container text-center">
    <div className="row align-items-start">
      <div className="col">
      <button type="button" className="btn btn-danger" onClick={decreaseKounter}>Danger</button>
      </div>
      <div className="col">
      <button type="button" className="btn btn-primary" onClick={resetKounter}>Primary</button>
      </div>
      <div className="col">
      <button type="button" className="btn btn-success" onClick={increaseKounter}>Success</button>
      </div>
    </div>
  </div>
  </div>
   
  </>
  
  )
}
