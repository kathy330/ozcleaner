/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react"
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"
import axios from 'axios'
import {useHistory} from "react-router-dom"
import Grid from '@material-ui/core/Grid'
import date from 'date-and-time'
import {useDispatch} from 'react-redux'
import {payOrderRequest, postOrderRequest } from '../../../store/actions'
// import OrderTitle from "../../AdminComponents/Customers/OrderTitle"
// import header from "../../../store/sagas/header"

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
}

export default function CheckoutForm({price,paystatus,data}) {
  // const classes = useStyles()
  const dispatch = useDispatch()
  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const postApi = 'http://localhost:8000/pay'


  const payapi = async() => {
    // Create PaymentIntent as soon as the page loads window.
    const paydata = {
      items: [{ id: "cleaning fee" }],
      // items: [{ type: "RC" }],
      // price:12800 // ¥128.00
      price:price
    }
    const level = localStorage.getItem('authLevel')
    const person = level === 'user' ? 'user':'employee'
    const {token} = JSON.parse(localStorage.getItem(`${person}Info`)).data
    const Header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
    const res = await axios.post(postApi,paydata,{headers:Header})
    await setClientSecret(res.data.clientSecret) // 🌟必须有这个
    // console.log('付款已创建: ',res)
    // console.log('付款安全码: ',res.data)
  }
  
  useEffect(() => {
    // 进入这个页面后，自动在Stripe生成订单价格
    payapi()
  }, [])

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const paySubmit = async (event) => {
    console.log('pay now...')
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
 
    if (payload.error) {
      // setError(`Payment failed ${payload.error.message}`)
      setError(`${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      dispatch(payOrderRequest()) // 下订单
    }
  }

  const postData = {      
    address: {
      address1: "",
      address2: "",
      suburb: "",
      state: "",
      postcode: ""
    },
    type: "",
    status: "confirmed",
    propertyType: "unknown",
    cabinets: 0,
    fridge: 0,
    oven: 0,
    interiorWindows: 0,
    review: "",
    rating: "",
    title: "",
    bedroomNum: 0,
    bathroomNum: 0,
    price: 0,
    startTime: "", // 2020-01-01T00:00:00
    endTime: "",
    userID: "",
    employeeID: "",
    firstName: "",
    lastName: "",
    phoneNumber: '',
    // userDetail:'604cb4dfc875675915d0d0a5'
  }

  // console.log('pay success? ', paystatus)
  if(paystatus === true) {
    const{otherdata} = data
    const{extra} = data
    // console.log(otherdata,extra)

    const pickDate = date.format(otherdata.date, 'YYYY-MM-DD') 
    const pickTime = date.format(otherdata.time, 'HH:mm:ss') 
    const datedate = `${pickDate}T${pickTime}Z`
    // console.log(pickDate,pickTime,datedate)
    
    let propertyType = ''
    if(otherdata.propertyType === '') {
      propertyType = 'unknown'
    }else {
      propertyType = otherdata.propertyType
    }
  
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const userObjectId = user.data.objectID
    const userid = user.data.ID
    // console.log(userObjectId)
    const postTitle = `${otherdata.type} Bedroom x ${otherdata.bedRoomNum} Bathroom x ${otherdata.bathRoomNum}`
    const newData = {
      ...postData,
      ...extra,
      bedroomNum:otherdata.bedRoomNum,
      bathroomNum:otherdata.bathRoomNum,
      type:otherdata.type,
      address:{
        ...postData.address,
        postcode:otherdata.postcode,
        address1:otherdata.address1,
        address2:otherdata.address2,
        suburb:otherdata.suburb,
        state:otherdata.state,
      },
      title:postTitle,
      startTime:datedate,
      // endTime:datedate, // endtime 什么时候设置？  
      firstName:otherdata.firstName,
      lastName:otherdata.lastName,
      phoneNumber:otherdata.phoneNumber,
      price:price,
      propertyType:propertyType,
      // userDetail:`ObjectId(${objectID})`
      userDetail:userObjectId,
      userID:userid
      // userDetail:'604cb4dfc875675915d0d0a5'
    }
    dispatch(postOrderRequest(newData)) // 在saga里控制跳转下一个页面
  }


  const history = useHistory()
  if(paystatus) {
    // console.log('post success')
    history.push("/order/confirm")
  }


  return (
    <>

      <Grid container direction="column" alignItems="center">

        <Grid item>     
          <form id="payment-form" onSubmit={paySubmit}>
            <CardElement 
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
            <button
              className="paybutton"
              type='submit'
              disabled={processing || disabled || succeeded}
              id="submit"
            >
              <span id="button-text">
                {processing ? (
                  <div className="spinner" id="spinner" />
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
            
            {/* Show any error that happens when processing the payment */}
            {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
            )}


            {/* Show a success message upon completion */}
            <p className={succeeded ? "result-message" : "result-message hidden"}>
              Payment succeeded
            </p>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
