import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBookById } from "../actions";

class BookId extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBookById(id);
  }
  render() {
    const { book } = this.props;

    if (!book) {
      return <div> Loading .... </div>;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={book.image_url} />

                <div className="card-content">
                  <p>{book.title}</p>
                </div>
                <div className="card-action">
                  <p> {book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ books }, ownProps) {
  //first argument is the applicaiton state and the second argument is the ownProps
  return { book: books[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBookById })(BookId);
