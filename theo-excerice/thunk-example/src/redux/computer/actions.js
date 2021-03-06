import { REMOVE_COMPUTER, ADD_COMPUTER, GET_COMPUTERS } from "../actionTypes";
import axios from "axios";

export const removeComputer = id => {
  return async dispatch => {
    try {
      await axios.delete(`http://localhost:3002/computers/${id}`);
      console.log(`computer is ${id}`);
      dispatch({ type: REMOVE_COMPUTER, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getComputers = () => {
  return async dispatch => {
    try {
      const data = await axios.get("http://localhost:3002/computers");
      const computers = await data;

      dispatch({ type: GET_COMPUTERS, payload: [...computers.data] });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addComputer = name => {
  return async dispatch => {
    try {
      console.log("sent data", { name });
      const { data } = await axios.post("http://localhost:3002/computer", {
        name
      });
      dispatch({
        type: ADD_COMPUTER,
        payload: { ...data }
      });
    } catch (e) {
      console.log(e);
    }
  };
};
