/* eslint-disable default-case */
import actionTypes from '../actions/actionTypes'

const initialState = {
    data: {},
    err: "",

}

const orders = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.LOAD_ORDER_SUCCEEDED):
            return {
                ...state,
                data: action.data
            }

        case (actionTypes.LOAD_ORDER_FAILED):
            return {
                ...state,
                error: action.data
            }
        default:
            return state
    }
}

export default orders