import React from 'react'
import { Grid, Typography, makeStyles, Card, CardContent, Divider } from '@material-ui/core'
import { SecondaryButton } from '../UIComponents/Buttons'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  card: {
    border: '1px solid',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 40,
    maxWidth: 200,
    margin: 'auto',
  },
  text: {
    textAlign: 'center',
  },
  price: {
    color: '#007bf5',
    textAlign: 'center',
  },
  button: {
    margin: 'auto',
    marginBottom: 20,
    backgroundColor: '#cc584e',
  },
}))


function AdminCustomersRight(props) {
  const classes = useStyles()
  const { orderPrice } = props

  return (
    <Grid item xs={12} sm={3} className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="subtitle2" gutterBottom>
              PRICE
            </Typography>
          </Grid>

          <Divider />

          <Grid item xs={12}>
            <Typography className={classes.price} variant="h3" color="textSecondary">
              $
              {orderPrice}
            </Typography>
          </Grid>
          <Divider />
        </CardContent>
      </Card>

      <SecondaryButton>CANCEL ORDER</SecondaryButton>
    </Grid>
  )
}

export default AdminCustomersRight
