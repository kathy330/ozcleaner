import React, { Component } from "react";

import axios from "axios";

class OliviaComponent extends Component {
  constructor() {
    super();
    this.state = {
    result:"",
    };
    this.loadInfo = this.loadInfo.bind(this);
  }

  componentDidMount() {
    this.loadInfo();
  }

  async loadInfo() {
    const promise = await axios.get("http://localhost:8000/users");
    const {status} = promise;
  
    if(status===200)
    {
      const {data} = promise;
      this.setState({result:data});
    }
  }

  render() {
    const {result} = this.state;
    return(
      <div>
        <h1>Result</h1>
        {result}
      </div>
    )
  }
}

export default OliviaComponent;