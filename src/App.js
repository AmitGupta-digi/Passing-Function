import React, { Component } from 'react';
// import Greet from './components/Greet';
import './App.css';
// import String from './components/Examples/String';
// import Condition from './components/Examples/Condit';
// import IsLogin from './components/Examples/login';
// import Hello from "./components/Hello"
import Props from "./PropsFunction"

class App extends Component {
  render() {
    function Time() {
      const mo= new Date();
      alert(mo);
    }
    const curMonth = "May";
    return (
      <div className="App">
        {/* <Greet Name='VIPIN' /> */}
        {/* <String month={curMonth} /> */}
        {/* <Condition visited={true} Name='Pankaj Sir' /> */}
        {/* <IsLogin IsLog={false} /> */}
        {/* <Hello name="Amit" /> */}
        <Props time={Time}/>
      </div>
    )
  }
}
export default App
