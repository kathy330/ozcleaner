/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import getOrders from '../../../api/Api'

export const requestOrderList = async (test) => {
    const requestUrl = getOrders(1, 5)
    console.log(test)

    return await axios.get(requestUrl)
}