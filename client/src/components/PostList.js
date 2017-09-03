import React, { Component } from 'react'

export default (props)=>{
    console.log(props);
    return(
        <div>
       {props.value.author}
            </div>
    )
}
