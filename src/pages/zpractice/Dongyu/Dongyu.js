import React from "react"

// import DongyuComponent from "../../../components/zpractice/Dongyu/DongyuComponent"
// import InsertOrder from "../../../components/zpractice/Dongyu/InsertOrder"
// import FinishOrder from "../../../components/zpractice/Dongyu/FinishOrder"
// import RegularTest from "../../../components/testSaga/Regular.saga"
import "./Dongyu.scss"
import UpdateTest from "../../../components/testSaga/Update.saga"

function DongyuPage(){
    return (
      <>
        <div className="dongyu-page">
          {/* <h1>This is Dongyu&apos;s page</h1> */}

          <UpdateTest />
          {/* <RegularTest /> */}
        
          {/* <InsertOrder /> */}
          {/* <FinishOrder /> */}
          {/* <DongyuComponent /> */}
        </div>
      </>
    )
}

export default DongyuPage