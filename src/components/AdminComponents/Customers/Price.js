import React from 'react'
// import style from '../scss/Admin.module.scss'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import priceStyles from '../styles/AdminComponentStyle'

// export default function Price() {
//   return (
//     <div className={style.price}>
//       <p className={style.price__name}>PRICE</p>
//       <hr className={style.price__hr} />
//       <p className={style.price__number}>$800</p>
//       <hr className={style.price__hr} />
//     </div>
//   )
// }

export default function SimpleCard() {
  const classes = priceStyles

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          PRICE
        </Typography>
        <hr />
        <Typography className={classes.pos} color="textSecondary">
          $800
        </Typography>
        <hr />
      </CardContent>

    </Card>
  )
}