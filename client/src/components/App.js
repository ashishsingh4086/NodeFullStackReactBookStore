import React, { Component } from "react";
import BookList from "../containers/book_list";
import Search from "../containers/Search";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import PostList from "./PostList";
import BookId from "./BookId";
import PostsNew from "./PostsNew";

const Data = () => {
  return <div>hello</div>;
};
export default class App extends Component {
  render() {
    return (
      <div className="container">
    
        <BrowserRouter>
          <div>
 
           <Route exact={true} path="/:id" component={BookId} />
            <Route exact={true} path="/" component={BookList} />
 
         
            <Route exact={true} path="/new" component={PostsNew} />
        
 
              
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
