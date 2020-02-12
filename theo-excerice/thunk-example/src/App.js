import React from "react";
import "./App.css";
import { Component } from "react";
import Users from "./containers/Users";
import Books from "./containers/Books";
import Computers from "./containers/Computers";


class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="container-child">
      
         <Users />
          <Books />
          <Computers />
        </div>
      </div>
    );
  }
}




export default App;
