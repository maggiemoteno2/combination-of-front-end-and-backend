import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook, getBooks } from "./../../redux/books/actions";
import { editTitle } from "./../../redux/books/actions";
import { removeBook } from "./../../redux/books/actions";

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
  searchTitle=(event)=>{
    this.setState({
      search:event.target.value.substr(0,20)
    })
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
    const { titleEdited, author, name, idEdited } = this.state;
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
              <input type='text' placeholder="search title..." value={this.state.search} onChange={this.searchTitle} />
              <button type="submit"><i class="fa fa-search"></i></button>
              </div>
        {filteredBooks.map(book => (
          <div key={book.name}>
            <h3 className="h3">
              Title: {book.name}
              <i
                id="icon"
                class="fa fa-edit"
                onClick={() => this.setEditedAuthor(book.name, book._id)}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="fa fa-trash"
                onClick={() => this.props.removeBook(book._id)}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
            </h3>
            <h3 className="h3"> Aurthor: {book.author} </h3>
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
  editedValue: state.books.editedValue
});

const mapDispatchToProps = dispatch => {
  return {
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
