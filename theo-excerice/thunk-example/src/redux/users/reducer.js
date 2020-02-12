import { REMOVE_USER, ADD_USER, ADD_USERS } from "../actionTypes";

const inititalState = { all: [], 
 date: new Date() };

export default function counter(state = inititalState, action) {
  switch (action.type) {
    case ADD_USERS: {
      return { ...state,  
        all: action.payload };
    }
    case ADD_USER: {
      const date = new Date()
      const id =
        state.all.length === 0 ? 1 : state.all[state.all.length - 1].id + 1;
      const newState = {
        ...state,
        all: [...state.all, { id, first_name: action.payload.first_name ,date:date }]
      };
      return newState;
    }
    case REMOVE_USER: {
      return {
        all: [
          ...state.all.filter(
            user => user["first_name"] !== action.payload.user
          )
        ]
      };
    }
    default:
      return state;
  }
}
