import React, { Component } from "react";
import "./Navbar.css";
import Users from "../containers/Users";
import Computers from "../containers/Computers";
import Books from "../containers/Books";
import BookPagination from './BookPagination'


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: false,
      books: false,
      computer: false,
     
    };
  }

  componentDidMount() {
    this.setState({books: false})
    setTimeout(() => { 
          this.setState({books: true})
    }, 1000);
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
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
        
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div class="users-toggle-button">
                    <button onClick={() => this.toggleUsers()}>Users</button>

                    <div className="data">{users ? <Users /> : null}</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <div className="books-toggle-button">
                    <button onClick={() => this.toggleBooks()}>Books</button>

                    {books ? <Books/>: null}
            
                    {books ? <BookPagination/>:null}
                    
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <div className="computure-toggle-button">
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
