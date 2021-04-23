/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import {Elements,CardElement,useStripe, useElements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f')


const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

const Pay2 = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
)

export default Pay2