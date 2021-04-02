/* eslint-disable*/
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUserListRequest } from "../../../store/actions"
import { useHistory } from "react-router-dom";

const KathyPage = (match) => {
  const id = match.match.params.id;
  return(
    <>
      <h1>Users: {id}</h1>

    </>
  )
}

export default KathyPage