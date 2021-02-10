import React  from 'react';
import axios from 'axios';
import {getWebApi,getBackendApi1,getBackendApi2} from '../../api/Dongyu/DongyuApi'

/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

export const getImage = () => axios.get(getWebApi());
export const getName = () => axios.get(getBackendApi1());
export const getBookName = () => axios.get(getBackendApi2());
// export const getPostName = () => axios.get(postBackendApi());

class Message extends React.Component {
  constructor(){
    super()
    this.state={
      webMessage:'',
      backEndNameMessage:'',
      backEndBookMessage:'',
      backEndPostMessage:''
    }
  }

  componentDidMount(){
    this.getImageApi()
    this.getUserName()
    this.getBookName()
    this.getPostInfo()
  }
  
  // 1.直接从网络api获取信息
  getImageApi = async() =>{
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

  // 2.从后端api GET
  getUserName = async() => {
    const response = await (getName())
    const {status} = response;
    console.log(response.data)

    if(status===200)
    {
      const {data} = response;
      this.setState({
        backEndNameMessage:data
      });
    }
  }

  // 3.从后端api GET
  getBookName = async() => {
    const response = await (getBookName());
    const {status} = response;
    console.log(response.data)
  
    if(status===200)
    {
      const {data} = response;
      this.setState({
        backEndBookMessage:data
      });
    }
  }

  // 4.从后端api POST
  getPostInfo = async() => {
    const response = await axios.post("http://localhost:8000/dy/users");
    const {status} = response;
    console.log(response.data) // 如何能得到postman里面post的数据呢？
  
    if(status===200)
    {
      const {data} = response;
      console.log(data)
      this.setState({
        backEndPostMessage:data
      });
    }
  }

  render(){
    const{webMessage} = this.state
    const{backEndNameMessage} = this.state
    const{backEndBookMessage} = this.state
    const{backEndPostMessage} = this.state
    return(
      <>
        <div className="dongyu-page__image-api">
          <h2>1. Get the image from api:</h2>
          <img src={webMessage} alt="dog" />
        </div>

        <div className="dongyu-page__backend-message">
          <h2>2. Get the message from back-end:</h2>
          <span>
            Message1:
            {backEndNameMessage}
          </span>
          <br />
          <span>
            Message2:
            {backEndBookMessage[0]}
            ,
            {backEndBookMessage[1]}
            ,
            {backEndBookMessage[2]}
          </span>
          <br />
          <span>
            Message3(POST message):
            {backEndPostMessage}
          </span>
        </div>
        
      </>
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