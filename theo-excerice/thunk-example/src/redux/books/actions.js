import { ADD_BOOK, REMOVE_BOOK, EDIT_TITLE, GET_BOOKS } from "../actionTypes";
import axios from "axios";

// export function removeBook(id) {
//   return {
//     type: REMOVE_BOOK,
//     payload: { id }
//   };
// }

export const removeBook=(id)=>{
return async dispatch =>{
  try{
     await axios.delete(`http://localhost:3002/books/delete/${id}`)
    console.log(`computer remove is ${id}`, )
    dispatch({type:REMOVE_BOOK , payload: {id}})
  }catch(e){
    console.log(e)
  }
}
}
export const editTitle=(name,id)=>{
  return async dispatch =>{
    try{
      await axios.put(`http://localhost:3002/books/${id}`,{name}  )
      dispatch({ type: EDIT_TITLE , payload:{name, id}})
  }catch(e){
    console.log(e)
  }
}
}

export const getBooks = () => {
  return async dispatch => {
    try {
      const data = await axios.get("http://localhost:3002/books");
      const books = await data;
      console.log("get data", data);

      dispatch({ type: GET_BOOKS, payload: [...books.data] });
    } catch (e) {
      console.log(e);
    }
  };
};
export const addBook = (name, author) => {
  return async dispatch => {
    try {
      console.log("sent data", { name, author });
      const {data}=await axios.post("http://localhost:3002/booksAdded", { name, author });
      dispatch({
        type: ADD_BOOK,
        payload: {...data}
      });
    } catch (e) {
      console.log(e);
    }
  };
};
