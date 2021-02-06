// import axios from 'axios';
import React from 'react'
import YanboApi from '../../api/yanbo/YanboApi'


function YanboComponent(){
    return(
      <div>
        <h2>This is component</h2>
        <h2>I can get message from:</h2>
        <h2><YanboApi /></h2>
      </div>
    )
  }


export default YanboComponent


