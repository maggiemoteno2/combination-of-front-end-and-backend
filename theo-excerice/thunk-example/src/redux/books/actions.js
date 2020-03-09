import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_TITLE,
  GET_BOOKS,
  SEARCH_BOOK
} from "../actionTypes";
import axios from "axios";

export const removeBook = id => {
  return async dispatch => {
    try {
      await axios.delete(`http://localhost:3002/books/delete/${id}`);
      console.log(`computer remove is ${id}`);
      dispatch({ type: REMOVE_BOOK, payload: { id } });
    } catch (e) {
      console.log(e);
    }
  };
};
export const editTitle = (name, id) => {
  return async dispatch => {
    try {
      await axios.put(`http://localhost:3002/books/${id}`, { name });
      dispatch({ type: EDIT_TITLE, payload: { name, id } });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getBooks = (data = { skip: 0, limit: 10 }) => {
  const { skip, limit } = data;
  return async dispatch => {
    try {
      const data = await axios.get(
        `http://localhost:3002/books/${skip}/${limit}`
      );
      const books = await data;
      console.log("get data", data);

      dispatch({ type: GET_BOOKS, payload: [...books.data] });
    } catch (e) {
      console.log(e);
    }
  };
};

export const searchBook = (searchTermForTitle,
  searchTermForAuthor) => {
  return async dispatch => {
    try {
      console.log("author2",searchTermForTitle,
      searchTermForAuthor)
      const data = await axios.get(`http://localhost:3002/bookSearch`, {
        params: {
          searchTermForTitle,
          searchTermForAuthor
        }
      });
      const book = await data;
      console.log("searched book", data);
      // dispatch({ type: SEARCH_BOOK, payload: [...book.data] });
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const addBook = (name, author) => {
  return async dispatch => {
    try {
      console.log("sent data", { name, author });
      const { data } = await axios.post("http://localhost:3002/books", {
        name,
        author
      });
      dispatch({
        type: ADD_BOOK,
        payload: { ...data }
      });
    } catch (e) {
      console.log(e);
    }
  };
};
