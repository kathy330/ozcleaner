// import React from 'react'


// export default function OrderNavBar() {
//   return (
//     <div className={style.navbar}>
//       <button className={style.button} type="submit">unconfirmed</button>
//       <button className={style.button} type="submit">in progress</button>
//       <button className={style.button} type="submit">unconfirmed</button>
//       <button className={style.button} type="submit">deleted</button>
//     </div>
//   )
// }

import React from 'react'
import Button from '@material-ui/core/Button'

import { navBarStyles } from '../styles/AdminComponentStyle'

import style from '../scss/Admin.module.scss'


// navbars
export default function ContainedButtons() {
  const classes = navBarStyles

  return (
    <div className={style.button}>
      <Button variant="contained" color="primary" className={classes.navBarStyles}>
        UNCONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.navBarStyles}>
        CONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.navBarStyles}>
        COMPLETED
      </Button>
      <Button variant="contained" color="primary" className={classes.navBarStyles}>
        CANCELLED
      </Button>
    </div>
  )
}