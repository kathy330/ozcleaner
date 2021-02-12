import './Dongyu.css'
import React from "react"
import DongyuComponent from "../../components/Dongyu/DongyuComponent"


function DongyuPage(){
    return (
      <div className="dongyu-page">
        <h1>This is Dongyu&apos;s page</h1>
        <DongyuComponent />
      </div>
    )
}

export default DongyuPage