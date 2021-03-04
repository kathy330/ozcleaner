import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {Card,  CardContent, Typography,  Box } from "@material-ui/core"


const useStyles = makeStyles({
  root: {
    maxWidth: 180,
    minWidth: 180,
    borderRadius:"8%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },

})

export default function DemoCard() {
  const classes = useStyles()
  

  return (

    <Card className={classes.root} elevation={0}>
      <CardContent>

        <Typography  color="textSecondary">
          Total Orders
        </Typography>
        <Typography variant="h5" component="h2" >
            <Box  fontWeight="fontWeightBold">
            28,350
          </Box>
        </Typography>

      </CardContent>

    </Card>

  )
}