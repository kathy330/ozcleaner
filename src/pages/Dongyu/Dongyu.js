import './Dongyu.css';
import React from "react";
import DongyuApi from "../../Component/DongyuApi"

function DongyuPage(){
    return (
      <div>
        <h1>This is Dongyu&apos;s page</h1>
        <DongyuApi />
      </div>
    )
}

export default DongyuPage;