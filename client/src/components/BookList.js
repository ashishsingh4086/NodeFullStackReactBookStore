import React, { Component } from 'react'

export default class BookList extends Component {
    render() {
        return (
            <div>
                {this.props.value.map((val)=>{
                 return (
                     <div key={val._id}>
                        {val.title}
                         {val.author}
                        {val.publisher}
                        <img src={val.image_url} alt="james book"/>
                         </div>
                 )
                })}
            </div>
        )
    }
}
