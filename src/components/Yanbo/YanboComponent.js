// import axios from 'axios';

/* eslint-disable */
import React  from 'react';
import axios from 'axios';
import getWebApi from '../../api/yanbo/YanboApi'




export const getImage = () => axios.get(getWebApi());

class YanboComponent extends React.Component {
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
      const {data:{message}} = response
      this.setState({
            webMessage:message
      })
    } catch{(e) => {
        console.error(e)
    }}
  }

  render(){
    const{webMessage} = this.state
    return(
      <div>
        <img src={webMessage} alt="比熊" />
      </div>
    )
  }
}

export default YanboComponent



