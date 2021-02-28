import React from 'react'
import Button from '@material-ui/core/Button'
import style from '../scss/Admin.module.scss'

export default function CancelOrderButton() {
  return (
    <div>
      <Button variant="contained" color="primary" className={style.button1}>CANCEL ORDER</Button>
    </div>
  )
}
