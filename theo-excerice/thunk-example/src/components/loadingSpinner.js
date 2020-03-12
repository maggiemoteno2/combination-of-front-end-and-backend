import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            Loading: false
        }
    }

    fetchData=()=>{
        console.log("fetching data")
    }
  render() {
    return (
      <div> 
          
           </div>
    );
  }
}
