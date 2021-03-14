/*eslint-disable */
import React from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TablePagination,
} from '@material-ui/core'
import ListTableRow from './ListTableRow'

// ListTable will has four params
// columns(obj): table head
// UserDate(obj): table body
// rowPreSet(num): is the default page row's number
// tableType(str): is to distinguish between customer list and staff list
function ListTable(props) {
  const { UserData, rowPreSet, tableType } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowPreSet)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {UserData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
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
        count={UserData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="User Per Page:"
      />
    </>
  )
}

export default ListTable

