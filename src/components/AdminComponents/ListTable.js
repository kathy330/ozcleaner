/* eslint-disable */
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Button,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  Typography,
} from '@material-ui/core'
import { getAllUserListRequest, getAllEmployeeListRequest } from '../../store/actions'
import ListTableHead from './ListTableHead'
import ListTableRow from './ListTableRow'
import LoadingIcon from './LoadingIcon'

/**
 * ListTable() is for displaying the user list(user/employee)
 * @param columns: (obj) table head
 * @param rowPreSet: (num) is the default page row's number
 * @param tableType: (str) is to distinguish between customer list and staff list
 */
function ListCustomerTable(props) {
  const { columns, rowPreSet, tableType } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowPreSet)
  const listSize = {page: page+1, pageSize: rowsPerPage}
  const dispatch = useDispatch()
  const [deletedId, setDeletedId] = React.useState(0)
  const [open, setOpen] = React.useState(false);
  // get userdata from state
  const usersData = useSelector(state => state.userslist.users.result)
  // get total users number from state
  const usersCount = useSelector(state => state.userslist.users.count)
  const loading = useSelector(state => state.userslist.loading)
  const error = useSelector(state => state.userslist.error)
  const dispatchRequest = (tableType === 'customer') 
  console.log(usersData)
  const dispatchRequested = () => {
    if (dispatchRequest) {
      dispatch(getAllUserListRequest(listSize))
    } else {
      dispatch(getAllEmployeeListRequest(listSize))
    }
  }

  useEffect(() => {
    dispatchRequested()
  }, [])

  const returnPage = ()=> {
    if (listSize.page * listSize.pageSize > usersCount){
      listSize.page = Math.floor(usersCount / listSize.pageSize) + 1
    } else if (listSize.page * listSize.pageSize === usersCount){
      listSize.page = usersCount / listSize.pageSize
    }
    return listSize.page  
  }

  const handleChangePage = (event, newPage) => {
    listSize.page = newPage+1
    dispatchRequested()
    setPage(newPage) // keep in the same page
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    listSize.pageSize = event.target.value
    const pageNum = returnPage() // avoive no user
    dispatchRequested()
    setPage(pageNum - 1) // keep in the same page
  }

  const openDeletedModal = (id) =>{
    // console.log(usersData.values(id))
    setDeletedId(id)
    setOpen(true)
  }
  
  const handleAlertClose = () => {
    setOpen(false)
  };

  const handleAlertConfirm = ()=>{
    console.log('confirm delete: ', deletedId)
    setOpen(false)
  }

  return (
    <>
      {/* if loading: show loading icon */}
      {loading && <LoadingIcon />}
      {/* if user data is not empty show ListTable.  */}
      {!loading && usersData.length > 0 && (
        <>
          <TableContainer>
            <Table aria-label="simple table">
              <ListTableHead columns={columns} />
              <TableBody>
                {usersData.map((row) => (
                  <ListTableRow
                    key={row.ID}
                    // eslint-disable-next-line no-underscore-dangle
                    id={row._id}
                    firstName={row.name.firstName}
                    lastName={row.name.lastName}
                    status={row.employmentStatus}
                    ongoingOrder={row.numberOfOnGoingOrder}
                    completedOrder={row.numberOfOrderFinished}
                    tableType={tableType}
                    openDeletedModal={openDeletedModal}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[rowPreSet, rowPreSet * 2, rowPreSet * 3]}
            component="div"
            count={usersCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage="User P/P:"
          />
          <Dialog
            open={open}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Do you want to delete this user?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                User: UserName(useremail)
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertConfirm} variant="contained" color="secondary">
                Delete
              </Button>
              <Button onClick={handleAlertClose} variant="contained" autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
      {/* if not loading && user data is empty: show no user available */}
      {usersData !== undefined && usersData.length === 0 &&
        !loading &&
        <Typography variant="h4">No users available!</Typography>}
      {/* display any error below */}
      {error && !loading && <Typography variant="h4">{error}</Typography>}
    </>
  )
}

export default ListCustomerTable