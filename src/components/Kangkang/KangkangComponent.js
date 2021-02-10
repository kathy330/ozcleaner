/* eslint-disable */
import axios from "axios";
import React from "react";
import Api from "../../api/Kangkang/KangkangApi";

class KangkangComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      image: ""
    }
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async() => {
    try {
      const response = await axios.get(Api());
      const image = response.data.message;
      this.setState({
        image: image
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <div>
        <img src = {this.state.image} alt="dogs" />
      </div>
    )
  }
}

export default KangkangComponent;