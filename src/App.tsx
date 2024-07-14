import React, { useEffect, useState } from 'react';
import './App.css';
import  { Header  } from './components/Header';
import { SegmentedControlsEnglandandWalesall } from './components/SegmentedControls';

// let myArray: Array<[]> = [];

let myArray: string[] = [];


const App = ()  => {
 let [myData , setMyData] = useState(myArray)

   const fetchDays = async () => {
        const res = await  fetch("https://www.gov.uk/bank-holidays.json");
        const data = await res.json();
        setMyData(data["england-and-wales"].events.slice(42))
        console.log(data["england-and-wales"].events)
   }

  useEffect(() => {
    fetchDays();
  }, [])


 // eslint-disable-next-line no-lone-blocks
 {myData && myData.map((item: React.Key | null | undefined) => {
  return (
    <div className="App">
      <body className="body-container" >
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <SegmentedControlsEnglandandWalesall width={''} height={''} />

        {/* <h3>{item.title}</h3>
        <h3>{item.date}</h3> */}
      </body>
      {'}'}{'}'}
    </div>
    )
  })}

}

 
 



export default App;
