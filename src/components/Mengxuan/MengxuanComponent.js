import React from 'react'
import axios from 'axios'

import {getWebApi,getBackendApi} from "../../api/Mengxuan/MengxuanApi";


class MengxuanComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            webImage:'',
            backMessage:''
        }
    }

    getApi = async() =>{
        try {
            const response = await axios.get(getWebApi())
            // console.log(response);
            const image = response.data.message
            // console.log(image);
            this.setState({
                webImage:image
            })
        } catch (e) {
            console.log(e)
        }

    }

    getBackApi = async() =>{
        try {
            const response = await axios.get(getBackendApi())
            // console.log(response);
            const message= response.data;
            // console.log(image);
            this.setState({
                backMessage: message
            })
        } catch (e) {
            console.log(e);
        }

    }

    componentDidMount=()=>{
        this.getApi()
        this.getBackApi()
    }

    render(){
        const {webImage} = this.state
        const {backMessage} = this.state
        return(
          <div>
            <p>this is mengxuan api</p>
            <img src={webImage} alt="dog" />
            <p>{backMessage}</p>
          </div>
        )
    }


}
export default MengxuanComponent