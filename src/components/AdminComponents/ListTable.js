/* eslint-disable */
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
  Typography,
} from '@material-ui/core'
import { getAllUserListRequest, getAllEmployeeListRequest } from '../../store/actions'
import ListTableHead from './ListTableHead'
import ListTableRow from './ListTableRow'
import LoadingIcon from './LoadingIcon'
import ListPagination from './ListPagination'
import { ContactSupportOutlined } from '@material-ui/icons'

/**
 * ListTable() is for displaying the user list(user/employee)
 * @param columns: (obj) table head
 * @param rowPreSet: (num) is the default page row's number
 * @param tableType: (str) is to distinguish between customer list and staff list
 */
function ListCustomerTable(props) {
  const { columns, urlpage, tableType } = props
  const pageSize = 12
  const listSize = { page: urlpage, pageSize: pageSize}
  const dispatch = useDispatch()
  const [deletedId, setDeletedId] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const path = `/admin/${tableType}`
  // get userdata from state
  const usersData = useSelector(state => state.userslist.users.result)
  // get total users number from state
  const usersCount = useSelector(state => state.userslist.users.count)
  const loading = useSelector(state => state.userslist.loading)
  const error = useSelector(state => state.userslist.error)
  const dispatchRequest = (tableType === 'customer') 
  const returnPage = (usersCount) => {
    if (pageSize) {
      return Math.floor(usersCount / listSize.pageSize) + 1
    } else if (usersCount < pageSize) {
      return 1
    } else {
      return Math.floor(usersCount / listSize.pageSize)
    }
  }
  const finalPage = returnPage(usersCount)
  // console.log(usersData)
  const dispatchRequested = () => {
    if (dispatchRequest) {
      dispatch(getAllUserListRequest(listSize))
    } else {
      dispatch(getAllEmployeeListRequest(listSize))
    }
  }
  useEffect(() => {
    dispatchRequested()
  }, [urlpage])

  const openDeletedModal = (id) =>{
    // console.log(usersData.values(id))
    setDeletedId(id)
    setOpen(true)
  }
  
  const handleAlertClose = () => {
    setOpen(false)
  }

  const handleAlertConfirm = ()=>{
    console.log('confirm delete: ', deletedId)
    setOpen(false)
  }

  const getPaginationPage = (page) =>{
    listSize.page = page
    dispatchRequested(listSize)
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
          <ListPagination 
            tableType={tableType} 
            getPaginationPage={getPaginationPage}
            count={finalPage}
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