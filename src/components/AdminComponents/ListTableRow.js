/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react'
import { TableRow, TableCell, Button, Avatar, makeStyles } from '@material-ui/core/'
import { GreenStatus, RedStatus } from '../UIComponents/Status'

const useStyle = makeStyles((theme) => ({
  avatar: {
    margin: 'auto',
  },
  actionBtn: {
    margin: '0 10px',
    [theme.breakpoints.down('xs')]: {
      margin: '0 5px',
    },
  },
}))

function CheckUser(id){
  alert(`Check UserID: ${id}`)
}

function DeleteUser(id){
  alert(`Delete UserID: ${id}`)
}

// StatusDisplay() is for checking whether to display status column or not
function StatusDisplay(tableType, status) {
  if( tableType === 'customer') {
    return null
  }
  // return <TableCell align="center">{StatusResult(status)}</TableCell>
  return (status === 'Available') ? (<GreenStatus>{status}</GreenStatus>) : (
    <RedStatus>{status}</RedStatus>
  )
}

function ListTableRow(props){
  const classes = useStyle()
  const { id, firstName, lastName, status, ongoingOrder, completedOrder, tableType } = props
  return (
    <TableRow role="checkbox" tabIndex={-1} key={id}>
      <TableCell align="center">
        <Avatar className={classes.avatar}>
          {firstName[0].toUpperCase()}
        </Avatar>
      </TableCell>
      <TableCell align="center">
        {firstName}
        {' '}
        {lastName}
      </TableCell>
      {StatusDisplay(tableType, status)}
      <TableCell align="center">
        {ongoingOrder}
        {' '}
        Order(s)
      </TableCell>
      <TableCell align="center">
        {completedOrder}
        {' '}
        Order(s)
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.actionBtn}
          onClick={() => CheckUser(id)}
        >
          Check
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.actionBtn}
          onClick={() => DeleteUser(id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ListTableRow