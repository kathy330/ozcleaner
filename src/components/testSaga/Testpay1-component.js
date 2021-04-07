// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/react-in-jsx-scope */

// import React, { useState, useEffect } from "react"
// import {
//   CardElement,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js"
// import axios from 'axios'
// // import {useHistory} from "react-router-dom"
// // import { makeStyles } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid'
// // import Button from '@material-ui/core/Button'
// import date from 'date-and-time'
// import {useDispatch, useSelector} from 'react-redux'
// import {payOrderRequest,postRegularRequest } from '../../store/actions'

// const cardStyle = {
//   style: {
//     base: {
//       color: "#32325d",
//       fontFamily: 'Arial, sans-serif',
//       fontSmoothing: "antialiased",
//       fontSize: "16px",
//       "::placeholder": {
//         color: "#32325d"
//       }
//     },
//     invalid: {
//       color: "#fa755a",
//       iconColor: "#fa755a"
//     }
//   }
// }

// export default function CheckoutForm({price,paystatus,data}) {
//   // const classes = useStyles()
//   const dispatch = useDispatch()
//   const stripe = useStripe()
//   const elements = useElements()

//   const [succeeded, setSucceeded] = useState(false)
//   const [error, setError] = useState(null)
//   const [processing, setProcessing] = useState('')
//   const [disabled, setDisabled] = useState(true)
//   const [clientSecret, setClientSecret] = useState('')
//   const postApi = 'http://localhost:8000/pay'


//   const payapi = async() => {
//     // Create PaymentIntent as soon as the page loads window.
//     const paydata = {
//       items: [{ id: "cleaning fee" }],
//       // items: [{ type: "RC" }],

//       // price:12800 // ¥128.00
//       price:price
//     }
//     const Header = {
//       'Content-Type': 'application/json',
//     }
//     const res = await axios.post(postApi,paydata,{headers:Header})
//     await setClientSecret(res.data.clientSecret) // 🌟必须有这个
//     console.log('付款已创建: ',res)
//     console.log('付款安全码: ',res.data)
//   }
  
//   useEffect(() => {
//     // 进入这个页面后，自动在Stripe生成订单价格
//     payapi()
//   }, [])

//   const handleChange = async (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty)
//     setError(event.error ? event.error.message : "")
//   }

//   const paySubmit = async (event) => {
//     event.preventDefault()
//     setProcessing(true)

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement)
//       }
//     })
 
//     if (payload.error) {
//       // setError(`Payment failed ${payload.error.message}`)
//       setError(`${payload.error.message}`)
//       setProcessing(false)
//     } else {
//       setError(null)
//       setProcessing(false)
//       setSucceeded(true)
//       dispatch(payOrderRequest()) // 下订单
//     }
//   }

//   const postData = {      
//     address: {
//       address1: "",
//       address2: "",
//       suburb: "",
//       state: "",
//       postcode: ""
//     },
//     type: "",
//     status: "in-progress",
//     propertyType: "unknown",
//     cabinets: 0,
//     fridge: 0,
//     oven: 0,
//     interiorWindows: 0,
//     review: "",
//     rating: "",
//     title: "I want clean",
//     bedroomNum: 0,
//     bathroomNum: 0,
//     price: 0,
//     startTime: "", // 2020-01-01T00:00:00
//     endTime: "",
//     userID: "",
//     employeeID: "",
//     firstName: "",
//     lastName: "",
//     phoneNumber: '',
//     // userDetail:'604cb4dfc875675915d0d0a5'
//   }

//   console.log('pay success? ', paystatus)
//   if(paystatus === true) {
//     const{otherdata} = data
//     const{extra} = data
//     // console.log(otherdata,extra)

//     const pickDate = date.format(otherdata.date, 'YYYY-MM-DD') 
//     const pickTime = date.format(otherdata.time, 'HH:mm:ss') 
//     const datedate = `${pickDate}T${pickTime}Z`
//     // console.log(pickDate,pickTime,datedate)
    
//     let propertyType = ''
//     if(otherdata.propertyType === '') {
//       propertyType = 'unknown'
//     }else {
//       propertyType = otherdata.propertyType
//     }
  
//     const user = JSON.parse(localStorage.getItem('userInfo'))
//     const userObjectId = user.data.objectID
//     // console.log(userObjectId)

//     const newData = {
//       ...postData,
//       ...extra,
//       bedroomNum:otherdata.bedRoomNum,
//       bathroomNum:otherdata.bathRoomNum,
//       type:otherdata.type,
//       address:{
//         ...postData.address,
//         postcode:otherdata.postcode,
//         address1:otherdata.address1,
//         address2:otherdata.address2,
//         suburb:otherdata.suburb,
//         state:otherdata.state,
//       },
//       startTime:datedate,
//       // endTime:datedate, // endtime 什么时候设置？  
//       firstName:otherdata.firstName,
//       lastName:otherdata.lastName,
//       phoneNumber:otherdata.phoneNumber,
//       price:price,
//       propertyType:propertyType,
//       // userDetail:`ObjectId(${objectID})`
//       userDetail:userObjectId
//       // userDetail:'604cb4dfc875675915d0d0a5'
//     }

//     console.log('订单信息: ', newData)

//     // dispatch(postRegularRequest(newData))
//   }


//   // const history = useHistory()
//   // if(paystatus) {
//   //   console.log('success')
//   //   history.push("/order/confirm")
//   // }



//   return (
//     <>

//       <Grid container direction="column" alignItems="center">

//         <Grid item>     
//           <form id="payment-form" onSubmit={paySubmit}>
//             <CardElement 
//               id="card-element"
//               options={cardStyle}
//               onChange={handleChange}
//             />
//             <br />
//             <br />
//             <button
//               className="paybutton"
//               type='submit'
//               disabled={processing || disabled || succeeded}
//               id="submit"
//             >
//               <span id="button-text">
//                 {processing ? (
//                   <div className="spinner" id="spinner" />
//                 ) : (
//                   "Pay now"
//                 )}
//               </span>
//             </button>
            
//             {/* Show any error that happens when processing the payment */}
//             {error && (
//             <div className="card-error" role="alert">
//               {error}
//             </div>
//             )}


//             {/* Show a success message upon completion */}
//             <p className={succeeded ? "result-message" : "result-message hidden"}>
//               Payment succeeded
//             </p>
//           </form>
//         </Grid>
    
//         {/* <Grid item>
//           <Button
//             // href="/order/confirm" 
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             // onClick={completePay}
//             disabled={!succeeded}
//           >
//             Complete Booking
//           </Button>
//         </Grid> */}
//       </Grid>
//     </>
//   )
// }
