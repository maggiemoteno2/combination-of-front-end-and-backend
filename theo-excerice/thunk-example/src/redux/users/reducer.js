import { REMOVE_USER, ADD_USER, ADD_USERS } from "../actionTypes";

const inititalState = { all: [] };

export default function counter(state = inititalState, action) {
  switch (action.type) {
    case ADD_USERS: {
      return { ...state, all: action.payload };
    }
    case ADD_USER: {
      return {
        ...state,
        all: [...state.all, action.payload]
      };
    }
    case REMOVE_USER: {
      console.log("payload", action.payload);
      return {
        all: [
          ...state.all.filter(user => user._id !== action.payload.id)
        ]
      };
    }
    default:
      return state;
  }
}
