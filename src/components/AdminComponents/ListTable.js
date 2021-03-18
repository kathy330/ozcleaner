/* eslint-disable */
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getAllUserListRequest } from '../../store/actions'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography,
} from '@material-ui/core'
import ListTableRow from './ListTableRow'
import LoadingIcon from './LoadingIcon'

// ListTable will has four params
// columns(obj): table head
// UserDate(obj): table body
// rowPreSet(num): is the default page row's number
// tableType(str): is to distinguish between customer list and staff list
function ListTable(props) {
  const { columns, rowPreSet, tableType } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowPreSet)

  const dispatch = useDispatch()
  const userlist = useSelector(state => state.users)
  const users = useSelector(state => state.users.users)
  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  // user data
  const usersData = useSelector(state => state.users.users.result)
  // total users number
  const usersCount = useSelector(state => state.users.users.count)
  console.log(users)
  useEffect(() => {
    dispatch(getAllUserListRequest())
  }, [])

  const handleChangePage = (event, newPage) => {
    console.log(newPage)
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    console.log(event.target.value)
    setPage(0)
  }

  // console.log('userc: ',typeof usersData)
  return (
    <>
      {/* if loading: show loading icon */}
      {loading && <LoadingIcon />}
      {/* if user data is not empty show ListTable.  */}
      {usersData !== undefined && usersData.length > 0 && (
        <>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <ListTableRow
                    key={row.ID}
                    id={row.ID}
                    firstName={row.name.firstName}
                    lastName={row.name.lastName}
                    status={row.status}
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

export default ListTable