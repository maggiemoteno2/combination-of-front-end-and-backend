import { combineReducers } from 'redux'
import users from './users/reducer'
import books from './books/reducer'
import computer from './computer/reducer'
import author from './books/reducer'

export default combineReducers({
  users,
  books,
  computer,
  author,

  
})