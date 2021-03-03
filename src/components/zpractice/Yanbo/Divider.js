import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop:-5,
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "1px solid black",
    width:70
  },
  content: {
    fontFamily: "museo-sans, sans-serif",
    fontWeightRegular:500,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    fontWeight: 100,
    fontSize:10,
    color: "black"
  }
}))

const DividerWithText = ({ children }) => {
 const classes = useStyles()
 return (
   <div className={classes.container}>
     <div className={classes.border} />
     <span className={classes.content}>{children}</span>
     <div className={classes.border} />
   </div>
 )
}
export default DividerWithText