import React from 'react';
import './App.css';
import  { Header  } from './components/Header';
import { SegmentedControlsEnglandandWalesall } from './components/SegmentedControls';
import { ApiRequest } from './components/ApiRequest';


const App = ()  => {
  return (
    <div className="App">
      <body className="body-container">
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <SegmentedControlsEnglandandWalesall width={''} height={''}/>
      </body>
      
    </div>
  );
}

export default App;
