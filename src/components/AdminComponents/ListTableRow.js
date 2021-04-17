/* eslint-disable no-alert */
import React from 'react'
import { Link } from 'react-router-dom'
import { TableRow, TableCell, Button, Avatar, makeStyles } from '@material-ui/core/'
import { GreenStatus, RedStatus } from '../UIComponents/Status'

const useStyle = makeStyles((theme) => ({
  avatar: {
    margin: 'auto',
  },
  actionBtn: {
    margin: '0 10px',
    width: '120px',
    [theme.breakpoints.down('xs')]: {
      margin: '0 5px',
    },
  },
}))

/**
 * ListTableRow() is for displaying the user display in the user/employee list
 * @param tableType: (string) type of the table
 * @param status: (string) employee status
 */
function StatusDisplay(tableType, status) {
  if (tableType === 'customer') {
    return null
  }
  return (status === 'available') ? 
    (<TableCell align="center"><GreenStatus>Available</GreenStatus></TableCell>) : 
    (<TableCell align="center"><RedStatus>Unavailable</RedStatus></TableCell>)
}

/**
 * ListTableRow() is for rendering the user info in the user/employee list
 * @param props: (obj) user information 
 */
function ListTableRow(props) {
  const classes = useStyle()
  // eslint-disable-next-line max-len
  const { index, id, firstName, lastName, status, ongoingOrder, completedOrder, tableType, openDeletedModal } = props
  const path = `/admin/${tableType}s/${id}`
  return (
    <TableRow role="checkbox" tabIndex={-1} key={id}>
      <TableCell align="center">
        <Avatar className={`${classes.avatar} text-uppercase`}>
          {firstName[0]}
        </Avatar>
      </TableCell>
      <TableCell align="center" className="text-capitalize">
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
          component={Link} 
          to={path}
        >
          View
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.actionBtn}
          onClick={() => openDeletedModal(id, index)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ListTableRow