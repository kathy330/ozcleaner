import React from 'react'
import { Button } from '@material-ui/core'
import { buttonStyle } from '../../styles/styles'

export function PrimaryButton(props) {
  const styles = buttonStyle()
  const { children } = props
  return <Button className={styles.primaryButton}>{children}</Button>
}

export function SecondaryButton(props) {
  const styles = buttonStyle()
  const { children } = props
  return <Button className={styles.secondaryButton}>{children}</Button>
}

// 写在order里面了，要进行判断，这里只在UI page有用了
export function BookingButton(props) {
  const styles = buttonStyle()
  const { children } = props
  return (
    <Button 
      // disabled
      // href='/order/confirm'
      type="submit"
      className={styles.bookingButton}
    >
      {children}
    </Button>
)
}
