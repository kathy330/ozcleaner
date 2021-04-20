import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardContent, Typography, Box } from "@material-ui/core"


const useStyles = makeStyles({
  root: {
    maxWidth: 180,
    minWidth: 270,
    borderRadius: "8%"
  },
  title: {
    marginTop: "25px"
  },
  content: {
    marginBottom: "10px"
  },
})

export default function DemoCard(props) {
  console.log(props)
  const {item, num} = props
  const classes = useStyles()
  return (

    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography color="textSecondary" className={classes.title}>
          {item}
        </Typography>
        <Typography variant="h3" className={classes.content}>
          {num}
        </Typography>
      </CardContent>

    </Card>

  )
}