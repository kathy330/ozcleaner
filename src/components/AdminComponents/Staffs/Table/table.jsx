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
import { Box } from "@material-ui/core"
import { GreenStatus ,GreyStatus} from '../../../../pages/UI/Status'

const useStyles = makeStyles(() => ({
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
  },
  action:{
    display:"flex",
    flexDirection:"row"
  }
}))

function createData(oid, status, cname, date, Actions1, Actions2) {
  return { oid, status, cname, date, Actions1, Actions2 }
}

const rows = [
  createData("01", "In Progress", "Lisa","11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("02", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("03", "Completed", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("04", "Completed", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("05", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("06", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("07", "Completed","Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("08", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("09", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("10", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("11", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("12", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("13", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("14", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("15", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("16", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("17", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
  createData("18", "In Progress", "Lisa", "11:30AM 22 Jan 2021", "Check", "Delete"),
]

function isButton(words) {
  if(words.status==='In Progress') {
   return  <GreenStatus>{words.status}</GreenStatus>
  }
   return <GreyStatus>{words.status}</GreyStatus>
  
}

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
    <Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.row1}>Order ID</TableCell>
              <TableCell align="center" className={classes.row2}>Status</TableCell>
              <TableCell align="center" className={classes.row3}>Customer</TableCell>
              <TableCell align="center" className={classes.row4}>Created At</TableCell>
              <TableCell align="center" className={classes.row5}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.oid}>
                <TableCell align="center">{row.oid}</TableCell>
                <TableCell align="center">
                  {isButton(row)}      
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.name}>{row.cname}</Typography>
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center" className={classes.action}>
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
  
    </Box>
    )
 
}

