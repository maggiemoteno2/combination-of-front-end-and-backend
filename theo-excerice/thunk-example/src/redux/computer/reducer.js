import { ADD_COMPUTER, REMOVE_COMPUTER ,GET_COMPUTERS} from "../actionTypes";

const initialState = {
  computerNames: []
};

export default function computers(state = initialState, action) {
  switch (action.type) {
    case  GET_COMPUTERS : {
      return { ...state,  
        computerNames: action.payload };
    }
    case ADD_COMPUTER: {
        return{
          ...state,
          computerNames: [
            ...state.computerNames,
            action.payload
          ]
        }
    }
    case REMOVE_COMPUTER: {
      console.log("payload",action.payload)
      return {
        computerNames: [
          ...state.computerNames.filter(
            computer => computer.id !==action.payload
          )
        ]
      };
    }
    default: {
      return state;
    }
  }
}
 