import React  from 'react';
import axios from 'axios';
import getWebApi from '../../api/DongyuApi'
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

export const getImage = () => axios.get(getWebApi());

class Message extends React.Component {
  constructor(){
    super()
    this.state={
      webMessage:''
    }
  }

  componentDidMount(){
    this.getApi()
  }
  
  getApi = async() =>{
    try{
      const response = await (getImage())
      console.log(response)
      const {data:{message}} = response
      console.log(message)
      this.setState({
            webMessage:message
      })
    }catch{(e) => {
        console.error(e)
    }}
  }

  render(){
    const{webMessage} = this.state
    return(
      <div>
        <h2>This message comes from Component floder/DongyuComponent </h2>
        <h2>Get the image from  api:</h2>
        <img src={webMessage} alt="dog" />
      </div>
    )
  }
}

export default Message


// import React, { Component } from "react";
// import axios from "axios";

// export default class Message extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         message:''
//     };
//     this.getMessage = this.getMessage.bind(this);
//   }

//   componentDidMount() {
//     this.getMessage();
//   }

//   async getMessage()
//   {    
//     const promise = await axios.get("http://localhost:8000/users");
//     const {status} = promise;
//     console.log(promise.data)
  
//     if(status===200)
//     {
//       const {data} = promise;
//       this.setState({
//         message:data
//         });
//     }
//   }

//   render() {
//         const {message} = this.state;
//         return(
//           <>
//             <p>
//               {message}
//             </p>
//           </>
//         )
//   }
// }