import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/books/actions";

class BookPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limt: 5,
      pageNumber: 1
    };
  }

  handleClick = value => {
    var data;
    if(value === 1){
       data = { skip: 0, limit: 5 };
    }
    if(value === 2){
      data = { skip: 6, limit: 5 };
    }
    if(value === 3){
       data = { skip: 11, limit: 5 };
    }
    
    this.props.getBooks(data);
    console.log("books", data);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          value={"1"}
          class="btn btn-secondary"
          onClick={() => this.handleClick(1)}
        >
          1
        </button>
        <button
          type="button"
          value={"2"}
          class="btn btn-secondary"
          onClick={() => this.handleClick(2)}
        >
          2
        </button>
        <button
          type="button"
          value={"3"}
          class="btn btn-secondary"
          onClick={() => this.handleClick(3)}
        >
          3
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getBooks: options => {
      dispatch(getBooks(options));
    }
  };
};

export default connect(null, mapDispatchToProps)(BookPagination);
