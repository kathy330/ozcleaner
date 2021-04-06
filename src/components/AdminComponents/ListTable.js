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
import { useHistory } from 'react-router-dom'
import { getAllUserListRequest, getAllEmployeeListRequest } from '../../store/actions'
import ListTableHead from './ListTableHead'
import ListTableRow from './ListTableRow'
import LoadingIcon from './LoadingIcon'
import ListPagination from './ListPagination'
import NoDataFound from './NoDataFound'

/**
 * ListTable() is for displaying the user list(user/employee)
 * @param columns: (obj) table head
 * @param urlpage: (str) is the url page number
 * @param tableType: (str) is to distinguish between customer list and staff list
 */
function ListCustomerTable(props) {
  const { columns, urlpage, tableType } = props
  const pageSize = 15
  const history = useHistory()
  const listSize = { page: urlpage, pageSize: pageSize}
  const dispatch = useDispatch()
  const [deletedId, setDeletedId] = React.useState(0)
  const [deletedIndex, setdeletedIndex] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  // get userdata from state
  const usersData = useSelector(state => state.userslist.users.result)
  // get total users number from state
  const usersCount = useSelector(state => state.userslist.users.count)
  const loading = useSelector(state => state.userslist.loading)
  const error = useSelector(state => state.userslist.error)
  const dispatchRequest = (tableType === 'customer') 
  // eslint-disable-next-line no-shadow
  const returnPage = (usersCount) => {
    if (usersCount < pageSize) {
      return 1
    } 
    if (usersCount % pageSize !== 0) {
      return Math.floor(usersCount / listSize.pageSize) + 1
    } 
    return Math.floor(usersCount / listSize.pageSize)
  }
  const finalPage = returnPage(usersCount)
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

  const getPaginationPage = (page) => {
    listSize.page = page
    dispatchRequested(listSize)
  }

  const openDeletedModal = (id, index) =>{
    setdeletedIndex(index)
    setDeletedId(id)
    setOpen(true)
  }
  
  const handleAlertClose = () => {
    setOpen(false)
  }

  const handleAlertConfirm = ()=>{
    // TODO: add update user deleted status here
    console.log('confirm delete: ', deletedId)
    setOpen(false)
  }

  const refreshPage = () => {
    listSize.page = 1
    dispatchRequested(listSize)
    const curPath = window.location.pathname
    history.push(`${curPath}`)
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
                {usersData.map((row,index) => (
                  <ListTableRow
                    key={row.ID}
                    index={index}
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
                {`User: 
                  ${usersData[deletedIndex].name.firstName}
                  (${usersData[deletedIndex].email})`}
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
        <NoDataFound refreshPage={refreshPage} />}
      {/* display any error below */}
      {error && !loading && <Typography variant="h4">{error}</Typography>}
    </>
  )
}

export default ListCustomerTable