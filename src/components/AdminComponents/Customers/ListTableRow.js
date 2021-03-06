/*eslint-disable */
import React from 'react'
import { TableRow, TableCell, Button, Avatar, makeStyles } from '@material-ui/core/';

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
}));

function checkUser(id){
  alert(`Check UserID: ${id}`)
}

function deleteUser(id){
  alert(`Delete UserID: ${id}`)
}

function StatusDisplay(tableType, status) {
  if( tableType === 'customer') {
    return ''
  }
  return <TableCell align="center"> {status} </TableCell>;
}

function ListTableRow(props){
  const classes = useStyle()
  const id = props.id
  const tableType = props.tableType
  return (
    <TableRow role="checkbox" tabIndex={-1} key={id}>
      <TableCell align="center">
        <Avatar className={classes.avatar}>{props.name[0].toUpperCase()}</Avatar>
      </TableCell>
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.ongoingOrder} Order(s)</TableCell>
      <TableCell align="center">{props.completedOrder} Order(s)</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.actionBtn}
          onClick={() => checkUser(id)}
        >
          Check
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.actionBtn}
          onClick={() => deleteUser(id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ListTableRow