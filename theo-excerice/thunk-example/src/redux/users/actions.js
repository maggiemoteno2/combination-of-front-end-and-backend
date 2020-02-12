import { REMOVE_USER } from "../actionTypes";

export function removeUser(user){
    return{
        type: REMOVE_USER,
        payload: {user}
    }
}