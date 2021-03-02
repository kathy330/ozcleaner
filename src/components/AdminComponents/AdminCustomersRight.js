import React from 'react'
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Container,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core'
// import style from './scss/Admin.module.scss'
// import Price from './Customers/Price'
// import CancelOrderButton from './Customers/CancelOrderButton'

const useStyles = makeStyles(() => ({
  root: {
    // border: '1px solid red',
  },
  card: {
    border: '1px solid',
    marginBottom: 50,
    borderRadius: 40,
    width: 200,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '20px',
  },
  text: {
    textAlign: 'center',
  },
  price: {
    color: '#007bf5',
    textAlign: 'center',
  },
}))


function AdminCustomersRight() {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={3} className={classes.root}>
      <Card className={classes.card}>

        <CardContent>
          <Container>
            <Grid item xs={12}>
              <Typography className={classes.text} variant="subtitle2" gutterBottom>
                PRICE
              </Typography>
            </Grid>

            <Divider />

            <Grid item xs={12}>
              <Typography className={classes.price} variant="h3" color="textSecondary">
                $800
              </Typography>
            </Grid>
            <Divider />
          </Container>
        </CardContent>
      </Card>

      <Container>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">CANCEL ORDER</Button>
        </Grid>
      </Container>
    </Grid>
  )
}

export default AdminCustomersRight