import React  from 'react';
import axios from 'axios';
import getWebApi from '../Api/DongyuApi'

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

  async getApi() {
    const apiUrl = await (await getImage()).config.url;
    console.log(apiUrl)
    const response = await fetch(apiUrl);
    const data = await response.json();
    const {message} = data// 解构
    this.setState({
      webMessage:message
    })
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