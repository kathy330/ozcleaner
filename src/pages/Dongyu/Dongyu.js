import React from "react"
import DongyuComponent from "../../components/Dongyu/DongyuComponent"
import InsertOrder from "../../components/Dongyu/InsertOrder"
import FinishOrder from "../../components/Dongyu/FinishOrder"
import "./Dongyu.scss"

function DongyuPage(){
    return (
      <div className="dongyu-page">
        {/* <h1>This is Dongyu&apos;s page</h1> */}
        <InsertOrder />
        <FinishOrder />
        <DongyuComponent />
      </div>
    )
}

export default DongyuPage