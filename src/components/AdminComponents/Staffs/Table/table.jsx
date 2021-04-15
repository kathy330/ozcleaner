/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles} from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import Typography from "@material-ui/core/Typography"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Button from '@material-ui/core/Button'
import{ Alert} from '@material-ui/lab'
import date from 'date-and-time'
import { Link } from 'react-router-dom'
import TablePagination from '@material-ui/core/TablePagination'
import {getSTAFFDETAILTABLERequest, updateOrderRequest} from "../../../../store/actions"
import * as Status from '../../../UIComponents/Status'

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650
  },
  status: {
    background: "green",
    color: "white",
    borderRadius: "25px",
  },
  name:{
    color:"#007bf5"

  },
  check: {
    display:"inline-block",
    margin:" 0 3%",
    minWidth:"120px",
    color:"white"
  },
  delete: {
    display:"inline-block",
    margin:" 0 3%",
    minWidth:"120px",
    color:"white"
  },
  action:{
    display:"flex",
    flexDirection:"row"
  }
}))

function displayTime(time) {
  let result = date.parse(time.split('.')[0], 'YYYY-MM-DD hh:mm:ss')
  result = result.toString().split(" ")
  return `${date.transform(result[4], 'HH:mm:ss', 'hh:mmA')} 
  ${result[2]} ${result[1]},${result[3]}`
}

function isButton(words) {
  if(words.status==='confirmed') {
    return <Status.GreenStatus>Confirmed</Status.GreenStatus>
  }
  if(words.status==='cancelled'){
    return <Status.RedStatus>Cancelled</Status.RedStatus>
  }
  if(words.status==='in-progress'){
    return <Status.BlueStatus>In Progress</Status.BlueStatus>
  }
  if(words.status==='finished'){
    return <Status.GreyStatus>Finished</Status.GreyStatus>
  }
  if(words.status==='reviewed'){
    return <Status.YellowStatus>Reviewed</Status.YellowStatus>
  }
  return <Status.GreyStatus>{words.status}</Status.GreyStatus>
}

function isCancel(user,classes,handleCancelOrder,handleFinishOrder) {
  const level = localStorage.getItem('authLevel')
  if(user.status==='confirmed') {
    return  (
      <Button 
        variant="contained"
        color="secondary"
        className={classes.delete}
        id={user.type}
        value={user._id}
        onClick={handleCancelOrder}
      >
        Cancel
      </Button>
)
  }
  if(user.status==="in-progress"&&level!=="admin") {
    return  (
      <Button 
        variant="contained"
        color="secondary"
        className={classes.delete}
        id={user.type}
        value={user._id}
        onClick={handleFinishOrder}
      >
        Finish
      </Button>
)
  }
  return (
    <Button 
      variant="contained"
      color="secondary"
      className={classes.delete}
      disabled
    >
      Cancel
    </Button>
)
  
}

function isAuth(user,classes) {
  const level = localStorage.getItem('authLevel')
  if(level==="admin"){
  
      return(
        <Button 
          variant="contained"
          className={classes.check}
          color="primary"
          component={Link} 
          to={`/admin/orders/${user._id}?type=${user.type}`}
        >
          View
        </Button>
      )
  }
    
 
    return(
      <Button 
        variant="contained"
        className={classes.check}
        color="primary"
        component={Link} 
        to={`/order-detail/${user._id}?type=${user.type}`}
      >
        View
      </Button>
    )
  }
  
 

const BasicTable=(props)=>{
  const {data}=props
  const classes = useStyles()
  const dispatch=useDispatch()

  const users =useSelector(state => state.staffDetailsTable.staffDetailsTable) 
  const loading = useSelector(state => state.staffDetailsTable.loading)
  // const error = useSelector(state => state.staffDetailsTable.error)

  
  const dispatchRequested = () => {
    dispatch(getSTAFFDETAILTABLERequest(data))
  }
    useEffect(()=>{
      dispatchRequested()
  },[])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  // cancel orders
  const handleCancelOrder = (event) => {
    if(event.target.value&&event.target.id){
      const body={id:event.target.value,orderstatus:"cancelled",type:event.target.id}
      dispatch(updateOrderRequest(body))
    }
  }

  // finish orders
  const handleFinishOrder = (event) => {
    if(event.target.value&&event.target.id){
      const body={id:event.target.value,orderstatus:"finished",type:event.target.id}
      dispatch(updateOrderRequest(body))
    }
  }


  return (
    <>
      {users.loading&&<p>Loading...</p>}

      {users.length!==0&&( 

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow key={user.taskID}>
                <TableCell align="center">{user.type+user.taskID}</TableCell>
                <TableCell align="center">
                  {isButton(user)}      
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.name}> 
                    {user.firstName}
                    {' '}
                    {user.lastName}
                  </Typography>
                </TableCell>
                <TableCell align="center">{displayTime(user.createdAt)}</TableCell>
                <TableCell align="center" className={classes.action}>
                  {isAuth(user,classes)}
                  {isCancel(user,classes,handleCancelOrder,handleFinishOrder)}
                </TableCell>
              </TableRow>
            ))}
      
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          align="center"
        />
      </TableContainer>
    )}
      {users.length===0&&!loading&&( 
        <Alert severity="info">No orders available! — check it out!</Alert>
)}
      {/* {error&&!loading&&
        ( 
          <Alert severity="error"> 
            <AlertTitle>{error}</AlertTitle>
            It&apos;s been a while since you&apos;ve signed in to Ozcleaner. 
            Please refresh your browser and try again.
          </Alert>
)} */}

    </>
  
    )
 
}
export default BasicTable

