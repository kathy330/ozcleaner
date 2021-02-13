import React from 'react'
import axios from 'axios'
import { getWebApi, getBackendApi } from '../../api/Kathy/KathyApi'

class KathyComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            displayImgUrl: '',
            backendCtx: ''
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
            // eslint-disable-next-line
            console.log(e);
        }
    }
    
    getBackendCtx = async() =>{
        try{
            const res = await axios.get(getBackendApi())
            const { data } = res
            this.setState({
              backendCtx: JSON.stringify(data),
            })
        } catch (e){
            // eslint-disable-next-line
            console.log(e)
        }
        
    }
    
    componentDidMount=()=>{
        this.getWebImg() 
        this.getBackendCtx()
    }

    render(){
        const {displayImgUrl} = this.state
        const {backendCtx} = this.state
        return (
          <main>
            <h1>Kathy&apos;s Page</h1>
            <img src={displayImgUrl} alt="dog" />
            <h2> 
              Backend Context: 
              {backendCtx}
            </h2>
          </main>
        )
    }
}

export default KathyComponent