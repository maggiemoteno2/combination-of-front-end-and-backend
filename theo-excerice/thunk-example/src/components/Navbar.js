import React, { Component } from "react";
import "./Navbar.css";
import Users from "../containers/Users";
import Computers from "../containers/Computers";
import Books from "../containers/Books";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: false,
      books: false,
      computer: false,
     
    };
  }
  toggleUsers() {
    this.setState({
      users: !this.state.users
    });
  }
  toggleBooks() {
    this.setState({
      books: !this.state.books
    });
  }
  toggleComputers() {
    this.setState({
      computer: !this.state.computer
    });
  }

 

  render() {
    const { users, books, computer } = this.state;

    return (
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
        
        <div className="container">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="users-toggle-button">
                    <button onClick={() => this.toggleUsers()}>Users</button>

                    <div className="data">{users ? <Users /> : null}</div>
                  </div>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <div class="books-toggle-button">
                    <button onClick={() => this.toggleBooks()}>Books</button>

                    {books ? <Books /> : null}
                  </div>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <div class="computure-toggle-button">
                    <button onClick={() => this.toggleComputers()}>
                      Computers
                    </button>

                    {computer ? <Computers /> : null}
                  </div>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
   
export default Navbar;
