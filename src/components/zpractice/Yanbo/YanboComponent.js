// import axios from 'axios';

/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React  from 'react'
import axios from 'axios'
import {getWebApi,getBackendApi} from '../../../api/practice/Yanbo/YanboApi'




export const getImage = () => axios.get(getWebApi())
export const getName = () => axios.get(getBackendApi())
class YanboComponent extends React.Component {
  constructor(){
    super()
    this.state={
      webMessage:'',
      backendMessage:''
    }
  }

  componentDidMount(){
    this.getApi()
    this.getMessage()
  }
  
  getApi = async() =>{
    try{
      const response = await (getImage())
      const {data:{message}} = response
      this.setState({
            webMessage:message
      })
    } catch{(e) => {
        console.error(e)
    }}
  }
  
  getMessage = async() => {
      const response = await (getName())
      const {status} = response
      // console.log(response)
  
      if(status===200)
      {
        const {data} = response
        this.setState({
          backendMessage:data
        })
      }
    }
  

  render(){
    const{webMessage} = this.state
    const{backendMessage} = this.state
    return(
      <div>
        <h1>This 比熊 is getting from dog API</h1>
        <img src={webMessage} alt="比熊" />
        <h1>This message is getting from koa backend</h1>
        <h1>{backendMessage}</h1>
      </div>
    )
  }
}

export default YanboComponent



