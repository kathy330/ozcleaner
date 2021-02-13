

import React from "react"
import axios from 'axios'
import getWebApi from '../../api/Olivia/OliviaApi'


// export const getImage = () => axios.get(getWebApi());

class OliviaComponent extends React.Component {
  constructor(){
    super()
    this.state={
      ImageURL:''
    }
  }

  componentDidMount(){
    this.getApi()
  }
  
  getApi = async() =>{
    try{
      const response = await axios.get(getWebApi())
      const {data:{message}} = response
      this.setState({
            ImageURL:message
      })
    } catch(e){
        // eslint-disable-next-line no-console
        console.error(e)
    }
  }

  render(){
    const{ImageURL} = this.state
    return(
      <div>
        <h1>This is a view created by Oliviacomponent</h1>
        <img src={ImageURL} alt=" " />
      </div>
    )
  }
}

export default OliviaComponent

