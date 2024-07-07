import React from 'react';
import './App.css';
import  { Header  } from './components/Header';


const App = ()  => {
  return (
    <div className="App">
      <body className="body-container">
       <p>Hello world!</p>
       console.log("hello world!")
        <Header/>
      </body>
      
    </div>
  );
}

export default App;
