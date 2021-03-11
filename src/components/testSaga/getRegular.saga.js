import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'


import {getREGULARRequest} from "../../store/actions"


const GitList = () => {

  const dispatch = useDispatch()
  const repo = useSelector(state => state.git_in_reducer_index.repos_in_reducer_init)
  
  useEffect(()=>{
    dispatch(getREGULARRequest())
  },[])
  console.log(repo)

  return(
    <>
      hi
      <ul>
        {repo.map((item)=>
          // console.log(item)
          (
            <>
              <h2>
                <br />
                {item.status}
                <br />
                {item.startTime}
                <br />
                {item.taskID}
              </h2>
            </>
          )
          )}
      </ul>
    </>
  )
}
export default GitList