import './Kangkang.css';
import React from "react";
import KangkangComponent from "../../component/Dongyu/KangkangComponent";

function KangkangPage(){
    return (
      <div className="KangkangPage">
        <h1>(From Kangkang.js)Hi! This is Kangkang&apos;s page</h1>
        <h2>(From Kangkang.js)You can check it from:</h2>
        <h2>(From Kangkang.js)src/Component/pages/Kangkang/Kangkang.js</h2>
        <KangkangComponent />
      </div>
    )
}

export default KangkangPage;