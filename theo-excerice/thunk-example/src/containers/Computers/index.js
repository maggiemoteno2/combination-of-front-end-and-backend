import React, { Component } from "react";
import { connect } from "react-redux";
import { removeComputer, addComputer } from "./../../redux/computer/actions";
import moment from "moment";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  computerAdd = name => {
    const { computerNames } = this.props;
    for (var i in computerNames) {
      if (
        computerNames[i].name.toUpperCase().trim() === name.toUpperCase().trim()
      ) {
        return alert("Computer already added");
      }
    }

    this.props.addComputer(name);
    this.setState({
      ...this.state,
      name: ""
    });
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    console.log("people", this.props.computerNames);
    const { name } = this.state;
    return (
      <div className="computer">
        <h1>Add computers</h1>

        {this.props.computerNames.map(computerName => (
          <div key={computerName.name}>
            <h3>
              {" "}
              {computerName.name}
              <i
                id="computerIcon"
                className="fa fa-trash"
                onClick={() => this.props.removeComputer(computerName.id)}
                aria-hidden="true"
                style={{ cursor: "pointer", marginRight: "30px" }}
              ></i>
            </h3>
            <p className="time">
              {moment(computerName.date).format("Do MMMM  YYYY, h:mm:ss a")}
            </p>
          </div>
        ))}
        <div className="wrapper2">
        <input
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <button
          disabled={this.state.name === ""}
          onClick={() => this.computerAdd(this.state.name)}
        >
          Add Computer
        </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  computerNames: state.computer.computerNames
});

const mapDispatchToProps = dispatch => {
  return {
    addComputer: name => {
      dispatch(addComputer(name));
    },
    removeComputer: id => {
      dispatch(removeComputer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
