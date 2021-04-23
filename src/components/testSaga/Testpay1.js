/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./Testpay1-component"

const promise = loadStripe("pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f")
export default function Pay1() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}