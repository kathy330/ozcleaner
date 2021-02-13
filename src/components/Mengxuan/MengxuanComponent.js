import React from 'react'
import axios from 'axios'

import MengxuanApi from '../../api/Mengxuan/MengxuanApi'


class MengxuanComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            webImage:''
        }
    }

    getApi = async() =>{
        try {
            const response = await axios.get(MengxuanApi())
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

    componentDidMount=()=>{
        this.getApi()
    }

    render(){
        const {webImage} = this.state
        return(
          <div>
            <p>this is mengxuan api</p>
            <img src={webImage} alt="dog" />
          </div>
        )
    }


}
export default MengxuanComponent