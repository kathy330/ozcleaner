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

// StatusResult() is to return different style status component
function StatusResult(status){
  if(status === 'Available'){
    return <GreenStatus>{status}</GreenStatus>
  }
  return <RedStatus>{status}</RedStatus>
}

// StatusDisplay() is for checking whether to display status column or not
function StatusDisplay(tableType, status) {
  if( tableType === 'customer') {
    return null
  }
  return <TableCell align="center">{StatusResult(status)}</TableCell>
}

function ListTableRow(props){
  const classes = useStyle()
  const {id} = props
  const { name, status, ongoingOrder, completedOrder, tableType } = props
  return (
    <TableRow role="checkbox" tabIndex={-1} key={id}>
      <TableCell align="center">
        <Avatar className={classes.avatar}>{name[0].toUpperCase()}</Avatar>
      </TableCell>
      <TableCell align="center">{name}</TableCell>
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