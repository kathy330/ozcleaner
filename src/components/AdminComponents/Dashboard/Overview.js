import React from 'react'
import { Grid, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Card from './card'


const useStyles = makeStyles(() => ({


}))

export default function Overview() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      Quick status
      <Grid container spacing={6}>

        {[1,2,3,4].map((x:any, i:any) => 
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