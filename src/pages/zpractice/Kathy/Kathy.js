/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUserListRequest } from "../../../store/actions"

const KathyPage = () => {
  // <KathyComponent />
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  console.log('loading',loading)
  useEffect(() => {
    dispatch(getAllUserListRequest())
  }, [])
  console.log('KathyC: ', users)
  return(
    <>
      <h1>Users List</h1>
      {loading && <p>Loading...</p>}
      {users.length > 0 && users.map((user) => (
        <>
          <h1>
            {user.name.firstName}
            {' '}
            {user.name.lastName}
          </h1>
          <h1>{user.numberOfOrderFinished}</h1>
        </>
      ))}
      {users.length === 0 && !loading && <p> No users available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
}

export default KathyPage