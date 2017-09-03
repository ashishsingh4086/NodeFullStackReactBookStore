import React, { Component } from 'react';
import axios from 'axios';
import BookList from './components/BookList';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[]
    };
  }
  componentWillMount(){
   axios.get("/api/book")
   .then((response)=>{
     this.setState({
       books:response.data
     },()=>{
       console.log(this.state.books)
     })
   })
  }


      


  render() {
    return (
      <div >
       <BookList value={this.state.books}/>
      </div>
    );
  }
}

export default App;
