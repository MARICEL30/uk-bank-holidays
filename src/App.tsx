import React from 'react';
import './App.css';
import  { Header  } from './components/Header';
import { SegmentedControlsEnglandandWalesall } from './components/SegmentedControls';
import { useQuery } from '@tanstack/react-query';

// let myArray: Array<[]> = [];

// let myArray: string[] = [];


const App = ()  => {
 const { isLoading, error, data }= useQuery({

    queryKey: [ "daysData"],
    queryFn: () =>
      fetch('https://www.gov.uk/bank-holidays.json').then((res) =>
        res.json(),
      ),
 })

   if (isLoading) return 'Loading...'

   if (error) return 'An error has occurred: ' + error.message

  //  const fetchDays = async () => {
  //       const res = await  fetch("https://www.gov.uk/bank-holidays.json");
  //       const data = await res.json();
  //       setMyData(data["england-and-wales"].events.slice(42))
  //       console.log(data["england-and-wales"].events)
  //  }


  console.log(data)
  return (
    <div className="App">
      <body className="body-container" >
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <SegmentedControlsEnglandandWalesall width={''} height={''} />

       <section>
       {/* <h1>{JSON.stringify(data["england-and-wales"].events.title)}</h1>
       <h1>{data["division"]}</h1> */}
      
     
       </section>
      </body>
    
    </div>
    )

}

 
 



export default App;
