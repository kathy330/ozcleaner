/* eslint-disable no-unused-vars */

import React from "react"

// import DongyuComponent from "../../../components/zpractice/Dongyu/DongyuComponent"
// import InsertOrder from "../../../components/zpractice/Dongyu/InsertOrder"
// import FinishOrder from "../../../components/zpractice/Dongyu/FinishOrder"
// import RegularTest from "../../../components/testSaga/Regular.saga"
import Pay1 from "../../../components/testSaga/Testpay1"
// import Pay2 from "../../../components/testSaga/Testpay2"
import "./Dongyu.scss"
// import UpdateTest from "../../../components/testSaga/Update.saga"

function DongyuPage(){
    return (
      <>
        <div className="dongyu-page">
          {/* <h1>This is Dongyu&apos;s page</h1> */}
          
          <Pay1 />
          {/* <Pay2 /> */}
          {/* <UpdateTest /> */}
          {/* <RegularTest /> */}
        
          {/* <InsertOrder /> */}
          {/* <FinishOrder /> */}
          {/* <DongyuComponent /> */}
        </div>
      </>
    )
}

export default DongyuPage