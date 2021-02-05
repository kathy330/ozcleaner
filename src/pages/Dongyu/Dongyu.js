import './Dongyu.css';
import React from "react";
import DongyuComponent from "../../Component/DongyuComponent"

function DongyuPage(){
    return (
      <div>
        <h1>This is Dongyu&apos;s page</h1>
        <DongyuComponent />

        <h1>从后端api取回的信息为：</h1>
      </div>
    )
}

export default DongyuPage;