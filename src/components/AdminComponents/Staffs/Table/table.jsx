import React from "react"
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
import TablePagination from '@material-ui/core/TablePagination'
import { GreenStatus } from '../../../../pages/UI/Status'


const useStyles = makeStyles({
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
    background:"#007bf5",
    color:"white"
  },
  delete: {
    display:"inline-block",
    margin:" 0 3%",
    background:"#f35162",
    color:"white"
  }
})

function createData(oid, status, cname, date, Actions1, Actions2) {
  return { oid, status, cname, date, Actions1, Actions2 }
}

const rows = [
  createData("01111111", "In Progress", "Lisa","11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("01111222", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("03333333", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11111111", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11111111", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11111111", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11111111", "In Progress","Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11111111", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete")
]



export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow key={row.oid}>
              <TableCell align="center">{row.oid}</TableCell>
              <TableCell align="center">
                <GreenStatus>{row.status}</GreenStatus>        
              </TableCell>
              <TableCell align="center">
                <Typography className={classes.name}>{row.cname}</Typography>
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <Button variant="contained" className={classes.check}>
                  {row.Actions1}
                </Button>
                <Button variant="contained" className={classes.delete}>
                  {row.Actions2}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
     
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        align="center"
      />
    </TableContainer>
  )
}
