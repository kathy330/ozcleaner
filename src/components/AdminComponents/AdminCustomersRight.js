import React from 'react';
import { Grid, Typography, makeStyles, Card, CardContent, Divider } from '@material-ui/core';
import { RedStatus } from '../UIComponents/Status';

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
}));

function AdminCustomersRight() {
  const classes = useStyles();
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
              $800
            </Typography>
          </Grid>
          <Divider />
        </CardContent>
      </Card>

      <RedStatus>CANCEL ORDER</RedStatus>
    </Grid>
  );
}

export default AdminCustomersRight;
