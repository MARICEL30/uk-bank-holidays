import { error } from "console"

const url = "https://www.gov.uk/bank-holidays.json"

 export const ApiRequest = async () => {

    try {
     const response =  await fetch(url)
     if(!response.ok) {
        throw new Error(`Response status: ${response.status}`);
       
     }

     const json =  await response.json()
     console.log(json)
    } catch(error) {
        console.error("dorry no data");
    }

 }