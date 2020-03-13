import React, { Component } from 'react';
import { connect } from "react-redux";
import {getBooks} from '../redux/books/actions'

 class BookPagination extends Component {
  constructor(props){
    super(props)
    this.state={
      currentPage: 1,
      limt: 5,
      pageNumber:1
    }
   
  }
  

  handleClick = (value) => {
    this.props.getBooks()
    console.log("books",this.props)
  };

  render() {
    return (
      <div> 
       <button type="button" value={"1"} class="btn btn-secondary" onClick={()=>this.handleClick(1)}>1</button>
       <button type="button" value={"2"} class="btn btn-secondary" onClick={()=>this.handleClick(2)}>2</button>
       <button type="button" value={"3"} class="btn btn-secondary" onClick={()=>this.handleClick(3)}>3</button>
      
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => {
      dispatch(getBooks());
    },
   
  };
};

export default connect(null, mapDispatchToProps)(BookPagination);
