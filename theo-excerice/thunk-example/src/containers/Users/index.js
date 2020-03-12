import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, addUser } from "../../redux/users/thunks";
import { removeUser } from "./../../redux/users/actions";
import moment from "moment";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { newUser: "" };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  setValue = e => {
    this.setState({ newUser: e.target.value });
  };

  addUser = () => {
    const { users } = this.props;
    console.log("compare", this.state.newUser);
    for (var i = 0; i < users.length; i++) {
      if (this.state.newUser === users[i].name) {
        alert("user exist");
        return;
      }
    }
    this.setState({ newUser: "" });
    this.props.addUser(this.state.newUser);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="userz">
        <div className="button-input">
          <input
            type="text"
            className="input"
            onChange={this.setValue}
            value={this.state.newUser}
          />
          <button
            className="button"
            disabled={this.state.newUser === ""}
            onClick={this.addUser}
          >
            Add User
          </button>
        </div>
        <div>
          {users.map(user => (
            
            <div key={user.name} className="wrapper">
              <h3 className="h3"> {user.name}</h3>
              
              <span>
                {" "}
                {/* <p className="user-date">{moment(user.date).format("Do MMMM  YYYY, h:mm:ss a")}</p> */}
                <i
                  className="fa fa-trash"
                  onClick={() => this.props.removeUser(user.id)}
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.all
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => {
    dispatch(getAllUsers());
  },
  addUser: name => {
    dispatch(addUser(name));
  },
  removeUser: id => {
    dispatch(removeUser(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
