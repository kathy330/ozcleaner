import './Dongyu.css';
import React from "react";
import DongyuComponent from "../../Component/DongyuComponent"

function DongyuPage(){
    return (
      <div>
        <h1>This is Dongyu&apos;s page</h1>
        <h1>从本地后端取回的信息为：</h1>
        <DongyuComponent />
      </div>
    )
}

export default DongyuPage;