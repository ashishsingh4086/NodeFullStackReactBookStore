import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchBook} from "../actions";
import PostList from "../components/PostList";
class BookList extends Component {
 
  componentDidMount(){
      this.props.fetchBook();
  }

  renderBook= book=>{
      return(
          <PostList value={book}/>
      )
  }
    render() {
        console.log(this.props.book);
        return (
            <div>
           {this.props.book.map(this.renderBook)}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {book:state.book};
}

export default connect(mapStateToProps,{fetchBook})(BookList);