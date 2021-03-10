import React from 'react'
import { Grid, Container, Button } from '@material-ui/core'

// import { makeStyles } from '@material-ui/core/styles'

import Card from './card'
import { asyncRqurestOrders } from '../../../store/sagas/actions/actionCreater'
import store from "../../../store/store"


// const useStyles = makeStyles(() => ({


// }))

export default function Overview() {
  // const classes = useStyles()

  return (
    <Container maxWidth="md">
      Quick status
      <Grid container spacing={6}>

        {[1, 2, 3, 4].map((x, i) =>
        (
          <Grid item>
            <Card key={x} other={i} />

          </Grid>
        )
        )}
      </Grid>

    </Container>
  )
}