import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TableContainer, Table, TableBody } from '@material-ui/core'
import { getAllUserListRequest, getAllEmployeeListRequest,
  deletedCustomerRequest, deletedEmployeeRequest } from '../../store/actions'
import ListTableHead from './ListTableHead'
import ListTableRow from './ListTableRow'
import LoadingIcon from './LoadingIcon'
import ListPagination from './ListPagination'
import NoDataFound from './NoDataFound'
import DialogPopup from './DialogPopup'

/**
 * ListTable() is for displaying the user list(user/employee)
 * @param columns: (obj) table head
 * @param urlpage: (str) is the url page number
 * @param tableType: (str) is to distinguish between customer list and staff list
 */
function ListCustomerTable(props) {
  const { columns, urlpage, tableType } = props
  const pageSize = 15
  const listSize = { page: urlpage, pageSize: pageSize}
  const dispatch = useDispatch()
  const [deletedId, setDeletedId] = React.useState(0)
  const [deletedIndex, setdeletedIndex] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const dispatchRequest = (tableType === 'customer') 
  console.log(tableType)
  // get userdata from state
  const usersData = useSelector(state => state.userslist.users.result)
  // get total users number from state
  const usersCount = useSelector(state => state.userslist.users.count)
  const loading = useSelector(state => state.userslist.loading)
  const dataType = useSelector(state => state.userslist.dataType)
  
  const error = useSelector(state => state.userslist.error)
  const path = dispatchRequest ? '/admin/customers' : '/admin/staffs'
  
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
  }, [])

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
    if (dispatchRequest) {
      dispatch(deletedCustomerRequest(deletedId, listSize)) 
    } else {
      dispatch(deletedEmployeeRequest(deletedId, listSize)) 
    }
    setOpen(false)
  }

  const refreshPage = () => {
    listSize.page = 1
    dispatchRequested(listSize)
  }

  return (
    <>
      {/* if loading: show loading icon */}
      {(loading || dataType !== tableType) && <LoadingIcon />}
      {/* if user data is not empty show ListTable.  */}
      {!loading && dataType === tableType && usersData.length > 0 && (
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
            path={path} 
            getPaginationPage={getPaginationPage}
            count={finalPage}
          />
          <DialogPopup 
            open={open} 
            handleAlertClose={handleAlertClose} 
            handleAlertConfirm={handleAlertConfirm} 
            userdata={usersData[deletedIndex]} 
          />
        </>
      )}
      {/* if not loading && user data is empty: show no user available */}
      {usersData !== undefined && usersData.length === 0 &&
        !loading &&
        <NoDataFound refreshPage={refreshPage} title={`No ${tableType} found!`} />}
      {/* display any error below */}
      {error && !loading && console.log(error)}
    </>
  )
}

export default ListCustomerTable