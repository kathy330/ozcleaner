/* eslint-disable import/prefer-default-export */
import { takeEvery } from 'redux-saga/effects'
import asyncRequestOrders from './handlers/todo'

export default function* watcherSaga() {
    yield takeEvery("LOAD_ORDER_REQUESTED", asyncRequestOrders)
}