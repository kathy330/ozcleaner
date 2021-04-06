/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import {Elements,CardElement,useStripe, useElements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f')


const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
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

// const MyCheckoutForm = () => (
//   <ElementsConsumer>
//     {({elements, stripe}) => (
//       <CheckoutForm elements={elements} stripe={stripe} />
//       )}
//   </ElementsConsumer>
//   )


const Pay2 = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
)

export default Pay2