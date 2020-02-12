import { ADD_BOOK, REMOVE_BOOK, EDIT_TITLE } from "../actionTypes";
import axios from 'axios';

// export function addBook(name, author, date) {
//   return {
//     type: ADD_BOOK,
//     payload: { name, author, date }
//   };
// }
export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: { id }
  };
}
export function editTitle(name, id) {
  return {
    type: EDIT_TITLE,
    payload: { name, id }
  };
}


export const addBook =(name,author)=>{
  return async dispatch =>{

      try{
          console.log('sent data', {name,author})
          const{data}=await axios.post("http://localhost:4000/booksAdded",{name,author})
          
      } catch(e){
          console.log(e)
      }
  }
}