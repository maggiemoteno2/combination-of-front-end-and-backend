import { ADD_BOOK, REMOVE_BOOK, EDIT_TITLE } from "../actionTypes";

export function addBook(name, author, date) {
  return {
    type: ADD_BOOK,
    payload: { name, author, date }
  };
}
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
