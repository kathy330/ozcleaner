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
import { Button, makeStyles } from '@material-ui/core'
import style from '../scss/Admin.module.scss'

// styles
const navBarStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 150,
    fontSize: 20,
    fontWeight: 50,
    margin: 10,
    backgroundColor: "red"
  }
}))


// navbars
export default function ContainedButtons() {
  const classes = navBarStyles()



  return (
    <div className={style.button}>
      <Button variant="contained" color="primary" className={classes.button}>
        UNCONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        CONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        COMPLETED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        CANCELLED
      </Button>
    </div>
  )
}