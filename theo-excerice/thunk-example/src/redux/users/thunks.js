import axios from 'axios'


export const getAllUsers = () => {
  return async dispatch => {
    try{
      const usersResult = await axios.get('http://localhost:3002/users')
      const users = await usersResult
      
          dispatch({ type: "ADD_USERS", payload: [ ...users.data ]})

    }catch(e){
      console.log(e)
    }
  }
}


// export const addUser = (user) => {
//   return {
//     type: "ADD_USER",
//     payload: user
//   }
// }
 export const addUser=(name)=>{
   console.log('name :', name);
   return async dispatch=>{
     try{
       const {data}=await axios.post(`http://localhost:3002/users`,{name})
       console.log("data",data)
      dispatch({
        type:"ADD_USER",
        payload:{...data}
      })
     }catch(e){
       console.log(e)
     }
   }
 }

 