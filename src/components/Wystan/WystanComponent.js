/* eslint-disable */
import axios from 'axios';
import React  from 'react';
import Api from '../../api/Wystan/WystanApi'

class WystanComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            image:''
        }
    }
    
    componentDidMount() {
        this.getApi();
    }

    getApi = async() => {
        try {
            const response = await axios.get(Api())
            console.log(response)
            const image = response.data.message;
            console.log(image);
            this.setState({
                image:image
            })
            console.log(image)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return <div> This is built from wystan
            <img src = {this.state.image} alt = "dog" />
        </div>
    }
}

export default WystanComponent;