import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../actions";
import PostList from "../components/PostList";
import Search from "./Search";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBook();
  }

  renderBook = book => {
    return <PostList key={book._id} value={book} />;
  };
  render() {
    return (
      <div>
        <Search />
        {this.props.books.map(this.renderBook)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBook })(BookList);
