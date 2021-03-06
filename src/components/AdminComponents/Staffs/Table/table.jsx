/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'




const theme = createMuiTheme({
  overrides: {
    MuiTableCell:{
      root:{
        borderBottom:"none"
      },
      stickyHeader:{
        backgroundColor:"white"
      }
    },
  },
})

const columns = [
  {
    id: 'oid',
    label: 'Order ID',
    minWidth: 170,
    align: 'center',
  }, {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'cname',
    label: 'Customers',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Created At',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
]

const rows = [
{
  oid:'1222222',
  status:"In progress",
  cname:"Lisa1",
  date:"11:30AM 20 Jan 2021",
},
{
  oid:'1223222',
  status:"In progress",
  cname:"Lisa2",
  date:"11:30AM 21 Jan 2021",
},
{
  oid:'1222422',
  status:"In progress",
  cname:"Lisa3",
  date:"11:30AM 22 Jan 2021",
},
{
  oid:'1222522',
  status:"In progress",
  cname:"Lisa4",
  date:"11:30AM 23 Jan 2021",
},
]

// function createData(name, code, population, size) {
//   const density = population / size
//   return { name, code, population, size, density }
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

export default function StickyHeadTable() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container} theme={theme}>
          <Table stickyHeader aria-label="sticky table" className={classes.title}>
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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
     
      </Paper>
    </ThemeProvider>
 
  )
}
