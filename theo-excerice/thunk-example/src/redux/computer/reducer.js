import { ADD_COMPUTER, REMOVE_COMPUTER } from "../actionTypes";

const initialState = {
  computerNames: [
    {
      name: "Mac-book",
      date:new Date(),
      id: 1,
    }
  ]
};

export default function computers(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPUTER: {
      const {name} = action.payload;
      if(state.computerNames.length<=0){
        return{
          ...state,computerNames: [
            ...state.computerNames,
            {
              name: name,
              date: new Date(),
              id:1,
            }
          ]
        }
      }
      return {
       ...state,computerNames: [
          ...state.computerNames,
          {
            name: name,
            date: new Date(),
            id: state.computerNames[state.computerNames.length - 1].id + 1
          }
        ]
      };
    
    }
    case REMOVE_COMPUTER: {
      return {
        computerNames: [
          ...state.computerNames.filter(
            computer => computer.id !==action.payload.id
          )
        ]
      };
    }
    default: {
      return state;
    }
  }
}
