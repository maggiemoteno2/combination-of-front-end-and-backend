import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook, getBooks,searchBook } from "./../../redux/books/actions";
import { editTitle } from "./../../redux/books/actions";
import { removeBook } from "./../../redux/books/actions";
import moment from "moment";

class Books extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      idEdited: "",
      titleEdited: "",
      name: "",
      author: "",
      search:''
    };
  }
  componentDidMount() {
    this.props.getBooks();
  }
  bookAdd = (name, author) => {
    const { availableBooks } = this.props;
    for (var i in availableBooks) {
      if (
        availableBooks[i].name.toUpperCase().trim() ===
        name.toUpperCase().trim()
      ) {
        return alert("book already added");
      } else if (availableBooks[i].author === name) {
        return this.state.idEdited;
      }
    }

    this.props.addBook(name, author);
    this.setState({
      ...this.state,
      name: "",
      author: ""
    });
  };
  searchForBooks=(event,author)=>{
    this.setState({
      search:event.target.value.substr(0,20),
    })
    this.props.searchBook(author)
  }

  editBook = (name, id) => {
    if (this.state.idEdited === "") {
      return;
    }
    this.setState({
      ...this.state,
      titleEdited: ""
    });
    console.log(`editBook ${name} ${id}`);
    this.props.editTitle(name, id);
  };

  setEditedAuthor = (name, id) => {
    this.setState({
      titleEdited: name,
      idEdited: id
    });
  };
  render() {
    let filteredBooks= this.props.availableBooks.filter((book)=>{
      return book.name.indexOf(this.state.search) !== -1;
    })
    const { titleEdited, author, name, idEdited,search } = this.state;
    return (
      <div className="Books">
        <input
          type="text"
          placeholder="Title"
          value={name}
          name="name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          name="author"
          onChange={e => this.setState({ author: e.target.value })}
        />

        <button
          className="add-books"
          disabled={this.state.author === ""}
          onClick={() => this.bookAdd(name, author)}
        >
          Add
        </button>
        
        <div className="search-box">
              <input type='text' placeholder="search title..." value={search} onChange={this.searchForBooks} />
              <button type="submit"><i class="fa fa-search" onClick={ () => this.searchForBooks()}></i></button>
              </div>
        {filteredBooks.map(book => (
          <div key={book.name}>
            <h3 className="h3">
              Title: {book.name}
              <i
                id="icon"
                class="fa fa-edit"
                onClick={() => this.setEditedAuthor(book.name, book.id)}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="fa fa-trash"
                onClick={() => this.props.removeBook(book.id)}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
            </h3>
            <h3 className="h3"> Aurthor: {book.author} </h3>
            <p className="book-date">{moment(book.date).format("Do MMMM  YYYY, h:mm:ss a")}</p>
            
            <br />

          </div>
        ))}
        <div className="edit-book-wrapper">
          <h3 className="h3">Edit Book</h3>
          <input
            type="text"
            placeholder="Title"
            value={titleEdited}
            name="titleEdited"
            onChange={e => this.setState({ titleEdited: e.target.value })}
          />
          
          <button
            className="edit-books"
            disabled={this.state.titleEdited ===""}
            onClick={() => this.editBook(titleEdited, idEdited)}
          >
            save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableBooks: state.books.availableBooks,
  editedValue: state.books.editedValue,
 
});

const mapDispatchToProps = dispatch => {
  return {
    searchBook:(author)=>{
      dispatch(searchBook(author))
    },
    getBooks: () => {
      dispatch(getBooks());
    },
    addBook: (name, author) => {
      dispatch(addBook(name, author));
    },
    removeBook: id => {
      dispatch(removeBook(id));
    },
    editTitle: (name, id) => {
      dispatch(editTitle(name, id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
