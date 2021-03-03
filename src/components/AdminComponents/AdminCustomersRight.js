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

// style
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
    paddingLeft: 10,
  },
  card: {
    border: '1px solid',
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 40,
    width: 200,
  },
  text: {
    textAlign: 'center',
  },
  price: {
    color: '#007bf5',
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#cc584e',
  }
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
        <Button variant="contained" color="primary" className={classes.button}>CANCEL ORDER</Button>
      </Container>
    </Grid>
  )
}

export default AdminCustomersRight