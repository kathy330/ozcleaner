/* eslint-disable import/prefer-default-export */
import actionTypes from "./actionTypes"


export const loadOrdersSucceeded = res => ({
  type: actionTypes.LOAD_ORDER_SUCCEEDED,
  data: res
})

export const loadOrdersFailed = err => ({
  type: actionTypes.LOAD_ORDER_FAILED,
  data: { err }
})


//  1/3 GET Regular order -- dongyu 
export const getREGULARRequest = (datalist) => ({
  type: actionTypes.GET_REGULAR_REQUEST,
  payload: datalist,
})
export const getREGULARSuccess = (datalist) => ({
  type: actionTypes.GET_REGULAR_SUCCESS,
  payload: datalist,
})
export const getREGULARFaild = (err) => ({
  type: actionTypes.GET_REGULAR_FAILED,
  payload: err,
})

//  2/3 POST Regular order -- dongyu 
export const postRegularRequest = (obj) => ({
  type:actionTypes.POST_REGULAR_REQUEST,
  payload:obj, // By convention, we put that information in a field called payload.
})
export const postRegularSuccess = (obj) => ({
  type:actionTypes.POST_REGULAR_SUCCESS,
  payload:obj, 
})
export function postRegularFaild(obj) {
  return{
    type:actionTypes.POST_REGULAR_FAILED,
    payload:obj, 
  }
}

//  3/3 POST Endoflease order -- dongyu 
export const postEndOfLeaseRequest = (obj) => ({
  type:actionTypes.POST_ENDOFLEASE_REQUEST,
  payload:obj, // By convention, we put that information in a field called payload.
})
export const postEndOfLeaseSuccess = (obj) => ({
  type:actionTypes.POST_ENDOFLEASE_SUCCESS,
  payload:obj, 
})
export function postEndOfLeaseFaild(obj) {
  return{
    type:actionTypes.POST_ENDOFLEASE_FAILED,
    payload:obj, 
  }
}

// //  4/4没啥用，不能跨页面取值，刷新会初始化。 Get COMPLETE order -- dongyu 
// export const getCOMPLETERequest = (obj) => ({
//   type:actionTypes.GET_COMPLETE_REQUEST,
//   payload:obj, // By convention, we put that information in a field called payload.
// })
// export const getCOMPLETESuccess = (obj) => ({
//   type:actionTypes.GET_COMPLETE_SUCCESS,
//   payload:obj, 
// })
// export const getCOMPLETEFaild = (obj) => ({
//     type:actionTypes.GET_COMPLETE_FAILED,
//     payload:obj, 
// })
// // export const getProject = (state) => state.regular_in_reducer_index


// * getAllUserListRequest() is for get all users from userTable -- kathy
export const getAllUserListRequest = users => ({
  type: actionTypes.GET_USERS_REQUESTED,
  payload: users,
})

// * getAllEmployeeListRequest() is for get all users from userTable -- kathy
export const getAllEmployeeListRequest = employees => ({
  type: actionTypes.GET_EMPLOYEES_REQUESTED,
  payload: employees,
})



// * get employee 
  // employee
  export const getEmployeeRequest = (datalist) => ({
    type: actionTypes.GET_EMPLOYEE_REQUEST,
    payload: datalist,
  })
  
  export const getEmployeeSuccess = (datalist) => ({
    type: actionTypes.GET_EMPLOYEE_SUCCESS,
    payload: datalist,
  })
  export const GET_EMPLOYEE_FAILED = (err) => ({
    type: actionTypes.GET_EMPLOYEE_FAILED,
    payload: err,
  })


// staff details page 
export const getSTAFFDETAILRequest = (users) => ({
    type: actionTypes.GET_STAFFDETAIL_REQUEST,
    payload: users,
  })
  
// customer details page
export const getCUSDETAILRequest = (users) => ({
  type: actionTypes.GET_CUSDETAIL_REQUEST,
  payload: users,
})

export const getCUSDETAILTABLERequest = (users) => ({
    type: actionTypes.GET_CUSDETAILTABLE_REQUEST,
    payload: users,
  })

  
