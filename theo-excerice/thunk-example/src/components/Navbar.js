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
      computer: true
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
      <div>
        <div class="navbar">
          <div class="dropdown">
            <div class="dropdown-content">
              <div class="header">
                <header> @Frontend and Backend</header>

              </div>
                <i class="fa fa-books"></i>
              <div className="lists">
              <i class="fa fa-user"></i>
                <div class="column">
                  <button onClick={() => this.toggleUsers()}>Users</button>
                  {users ? <Users /> : null}
                </div>
                
                <div class="column">
                  <button onClick={() => this.toggleBooks()}>Books</button>
                  <div className="books-value">
                  {books ? <Books /> : null}
                  </div>
                </div>

                <div class="column">
                  <button onClick={() => this.toggleComputers()}>
                    Computers
                  </button>
                  <div className="computer-value">
                  {computer ? <Computers /> : null}
                  </div>
                </div>
                </div>

              <div class="row">
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
