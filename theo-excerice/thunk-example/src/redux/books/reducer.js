import {
  ADD_BOOK,
  EDIT_TITLE,
  REMOVE_BOOK,
  SAVE_EDITED_VALUE,
  GET_BOOKS,
  SEARCH_BOOK,
  BOOK_LOADER
} from "../actionTypes";

const initialState = {
  availableBooks: [],
  isBookLoading: false
};

export default function books(state = initialState, action) {
  switch (action.type) {
   case BOOK_LOADER:{
     return {...state,isBookLoading:action.payload}
   }
    case GET_BOOKS: {
      console.log("books reducer",action.payload)
      return {
        ...state,
        availableBooks: action.payload,
      };
    }
    case ADD_BOOK: {
      return {
        ...state,
        availableBooks: [...state.availableBooks, action.payload]
      };
    }
    case SEARCH_BOOK:{
      return{
        ...state,availableBooks:action.payload
      }
    }

    case EDIT_TITLE: {
      const bookIndex = state.availableBooks.findIndex(
        book => book.id === action.payload.id
      );
      state.availableBooks[bookIndex].name = action.payload.name;
      console.log("ajd", state.availableBooks);
      return { ...state, availableBooks: [...state.availableBooks] };
    }

    case SAVE_EDITED_VALUE: {
      return { ...state, editedValue: action.payload };
    }
    case REMOVE_BOOK: {
      console.log("books action payload", action.payload.id);
      return {
        availableBooks: [
          ...state.availableBooks.filter(
            books => books.id !== action.payload.id
          )
        ]
      };
    }
    default: {
      return state;
    }
  }
}
