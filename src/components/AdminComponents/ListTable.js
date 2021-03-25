/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
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
  
  // get userdata from state
  const usersData = useSelector(state => state.userslist.users.result)
  // get total users number from state
  const usersCount = useSelector(state => state.userslist.users.count)
  const loading = useSelector(state => state.userslist.loading)
  const error = useSelector(state => state.userslist.error)
  const dispatchRequest = (tableType === 'customer') 

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
                    id={row.ID}
                    firstName={row.name.firstName}
                    lastName={row.name.lastName}
                    status={row.employmentStatus}
                    ongoingOrder={row.numberOfOnGoingOrder}
                    completedOrder={row.numberOfOrderFinished}
                    tableType={tableType}
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