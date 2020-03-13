import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment'
import {
  removeComputer,
  addComputer,
  getComputers
} from "./../../redux/computer/actions";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    this.props.getComputers();
  }

  computerAdd = name => {
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

        {this.props.computerNames.map(computerName => (
          <div key={computerName.name}>
            <h3 className="h3">
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
            <p className="computer-date">{moment(computerName.date).format("Do MMMM  YYYY, h:mm:ss a")}</p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  computerNames: state.computer.computerNames
});

const mapDispatchToProps = dispatch => {
  return {
    getComputers: () => {
      dispatch(getComputers());
    },
    addComputer: name => {
      dispatch(addComputer(name));
    },
    removeComputer: id => {
      dispatch(removeComputer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
