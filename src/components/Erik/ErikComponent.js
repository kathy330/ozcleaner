import React from "react"
import axios from 'axios'
import getWebApi from '../../api/Erik/ErikApi'

class ErikComponent extends React.Component {
    constructor(){
      super()
      this.state = {
          displayImgUrl: ''
      }
  }

  getWebImg = async() => {
    try{
        const res = await axios.get(getWebApi())
        const {data:{message}} = res
        this.setState({
            displayImgUrl: message
        })
    } catch (e) {
        console.log(e)
    }
  }

  componentDidMount=()=>{
    this.getWebImg() 
  }

  render(){
      const {displayImgUrl} = this.state
      return (
        <main>
          <h1>Erik&apos;s Page</h1>
          <img src={displayImgUrl} alt="dog" />
        </main>
      )
  }
}


export default ErikComponent