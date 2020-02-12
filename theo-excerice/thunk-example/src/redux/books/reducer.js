import { ADD_BOOK, EDIT_TITLE, REMOVE_BOOK, SAVE_EDITED_VALUE } from "../actionTypes";

const initialState = {
  availableBooks: [
    {
      name: "The Half-Blood Prince",
      author: "J. K. Rowling",
      id: 1,
      date: new Date(),
    }
  ]
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const { name, author} = action.payload;
      if(state.availableBooks.length<=0){
        return{
          availableBooks: [
            ...state.availableBooks,
            {
              name: name,
              author: author,
              date: new Date(),
              id: 1,
            }
          ]
        }
      }
      return {
        availableBooks: [
          ...state.availableBooks,
          {
            name: name,
            author: author,
            date: new Date(),
            id: state.availableBooks[state.availableBooks.length - 1].id + 1
          }
        ]
      };
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
