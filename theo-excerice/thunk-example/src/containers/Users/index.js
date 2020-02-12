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
      if (this.state.newUser === users[i].first_name) {
        alert("user exist");
        return;
      }
    }
    this.setState({ newUser: "" });
    this.props.addUser({ first_name: this.state.newUser });
  };

  render() {
    const { users } = this.props;
    return (
      <div className="userz">
        <h1>Users and Added time</h1>
        <div>
          {users.map(user => (
            <div className="wrapper">
              <h3 className="h3"> {user["first_name"]}</h3>
              <p className="date">
                {moment(user.date).format("Do MMMM  YYYY, h:mm:ss a")}
              </p>
              <span>
                {" "}
                <i
                  className="fa fa-trash"
                  onClick={() => this.props.removeUser(user["first_name"])}
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
          ))}
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
  addUser: user => {
    dispatch(addUser(user));
  },
  removeUser: user => {
    dispatch(removeUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
