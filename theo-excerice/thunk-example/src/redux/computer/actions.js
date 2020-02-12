import { REMOVE_COMPUTER, ADD_COMPUTER } from "../actionTypes";
import axios from 'axios';

export function removeComputer(id) {
    return {
        type: REMOVE_COMPUTER,
        payload: {id}
    };
}
// export function addComputer(name) {
//     return {
//         type: ADD_COMPUTER,
//         payload:  {name}
//     }
// }


// export const addComputer = (name) => {
//     return async dispatch => {
//       const computerResults = await axios.post('https://localhost:5000/computer')
//       const computer = await computerResults.json()
  
//       dispatch({ type: ADD_COMPUTER, payload: [ ...computer.data ]})
//     }
//   }

   export const addComputer =(name)=>{
      return async dispatch =>{

          try{
              console.log('sent data', {name})
              await axios.post("http://localhost:4000/computer",{name})
              const {data}= await axios.get('http://localhost:4000/computers')
              
          } catch(e){
              console.log(e)
              
             
          }
      }
  }