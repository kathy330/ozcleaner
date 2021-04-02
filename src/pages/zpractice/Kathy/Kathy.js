/* eslint-disable*/
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUserListRequest } from "../../../store/actions"
// import KathyComponent from "../../../components/zpractice/Kathy/KathyComponent"
import { useHistory } from "react-router-dom";

const KathyPage = (match) => {
  let history = useHistory()
  // function BackButton() {
  //   let history = useHistory()
  //   return (
  //     <button type="button" onClick={() => history.goBack()}>
  //       goBack
  //     </button>
  //   )
  // }
  console.log(match)
  return(
    <>
      {/* <BackButton/> */}
      <h1>Users List</h1>
      {/* <KathyComponent pageSize={10}/> */}
    </>
  )
}

export default KathyPage