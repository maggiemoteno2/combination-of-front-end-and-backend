import { REMOVE_USER } from "../actionTypes";
import axios from "axios";

export const removeUser = id => {
  return async dispatch => {
    try {
      await axios.delete(`http://localhost:3002/users/delete/${id}`);
      console.log(`check this out ${id}`);
      dispatch({ type: REMOVE_USER, payload: { id } });
    } catch (e) {
      console.log(e);
    }
  };
};
