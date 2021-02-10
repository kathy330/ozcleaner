/* eslint-disable */
import axios from "axios";
import React from "react";
import {getWebApi, getBackendApi1} from "../../api/Kangkang/KangkangApi";



class KangkangComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      image: ""
    }
  }

  componentDidMount() {
    this.getApi();
    this.getBEApi1();
  }

  getApi = async() => {
    try {
      const response = await axios.get(getWebApi());
      const image = response.data.message;
      this.setState({
        image: image
      })
    } catch (e) {
      console.log(e);
    }
  }

  getBEApi1 = async() => {
    const getApi1 = () => axios.get(getBackendApi1())
    const response = await (getApi1())
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

  render() {
    const {image} = this.state
    return(
      <main>
        <div className="kangkang-page">
        <img src = {image} alt="random" />
      </div>
      <div className="kangkang-bepage">
        {backEndNameMessage}
      </div>
      </main>
    )
  }
}

export default KangkangComponent;