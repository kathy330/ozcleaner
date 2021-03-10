import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@material-ui/core'
import ListTableRow from './ListTableRow'

// ListTable will has four params
// columns(obj): table head
// UserDate(obj): table body
// rowPreSet(num): is the default page row's number
// tableType(str): is to distinguish between customer list and staff list
function ListTable(props){
  const { columns, UserData, rowPreSet, tableType } = props
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
            {UserData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <ListTableRow
                key={row.id}
                id={row.id}
                name={row.name}
                status={row.status}
                ongoingOrder={row.ongoingOrder}
                completedOrder={row.completedOrder}
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
