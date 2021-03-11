import React from "react"
// import DongyuComponent from "../../../components/zpractice/Dongyu/DongyuComponent"
// import InsertOrder from "../../../components/zpractice/Dongyu/InsertOrder"
// import FinishOrder from "../../../components/zpractice/Dongyu/FinishOrder"
import GetRegularSaga from "../../../components/testSaga/getRegular.saga"
import "./Dongyu.scss"

function DongyuPage(){
    return (
      <div className="dongyu-page">
        {/* <h1>This is Dongyu&apos;s page</h1> */}

        <GetRegularSaga />
        
        {/* <InsertOrder />
        <FinishOrder /> */}
        {/* <DongyuComponent /> */}
      </div>
    )
}

export default DongyuPage