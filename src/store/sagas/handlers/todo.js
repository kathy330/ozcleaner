/* eslint-disable no-fallthrough */
/* eslint-disable import/prefer-default-export */

import { call, put} from 'redux-saga/effects'
// import { call, put, select, fork } from 'redux-saga/effects'
// import axios from 'axios'
import actionTypes from '../actions/actionTypes'
import { requestOrderList } from '../requests/todo'


export default function* asyncRequestOrders(action) {
    switch (action.type) {
        case actionTypes.LOAD_ORDER_REQUESTED: {
            try {

                // const { data } = yield call(axios.get, "http://localhost:8000/regular")
                // console.log(requestOrderList)
                const result = yield call(requestOrderList, "this is input")
                // console.log(oneTodoRes)
                yield put({ type: 'LOAD_ORDER_SUCCEEDED', data: result })
            } catch (err) {
                console.log(err)
            }
            break
        }

        default: {
            console.log("this is default")
        }
    }
}