import React from 'react'
import { makeStyles, Box, Grid, Typography, Link } from '@material-ui/core'
import { deepPurple, deepOrange } from '@material-ui/core/colors'
import { Link as RouterLink } from 'react-router-dom'
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded'


// styles
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  black: {
    backgroundColor: "#000a12",
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '20px',
  },
  text: {
    marginLeft: 10,
  },
  textcolor: {
    color: '#007bf5'
  },
  linkcolor: {
    // color:'#67a9ff'
    color: 'black',
  },
  divider: {
    marginTop: 10,
    border: 'solid 1px #e8ebfa',
  }
}))


export default function AssginedTo(props) {
  const classes = styles()
  // where can I find these names?
  const { employeeFirstName, employeeLastName, employeeObjectID } = props
  const path = `/admin/staffs/${employeeObjectID}`
  // const path = `/admin/users.`
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        {/* <Avatar className={classes.black}>{employeeFirstName[0].toUpperCase()}</Avatar> */}
        <AssignmentTurnedInRoundedIcon />
      </Grid>
      <Grid item xs={9} sm={10} className={classes.text}>
        <Typography className={classes.textcolor} variant="subtitle2">ASSIGNED TO</Typography>
        <Grid container direction="row" justify="space-between" space={5}>
          {(employeeFirstName === 'null'
            && employeeLastName === 'null')
            && (
              <>
                No one take this order yet.
              </>
            )}
          {(employeeFirstName !== 'null' || employeeLastName !== 'null') && (
            <Link
              className={classes.linkcolor}
              component={RouterLink}
              to={path}
              variant="subtitle2"
            >
              {employeeFirstName[0].toUpperCase()}
              {employeeFirstName.slice(1)}
              {' '}
              {employeeLastName[0].toUpperCase()}
              {employeeLastName.slice(1)}
            </Link>
          )}
          {/* <Typography variant="subtitle2">21 hours ago</Typography> */}
        </Grid>
      </Grid>
    </Box>
  )
}
