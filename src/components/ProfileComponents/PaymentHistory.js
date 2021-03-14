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
import KingBedIcon from '@material-ui/icons/KingBed'
import BathtubIcon from '@material-ui/icons/Bathtub'

const useStyles = makeStyles((theme) => ({
  tableCell:{
    padding:'8px',
    [theme.breakpoints.down((1550))]:{
      padding:'7px',
    },
    [theme.breakpoints.down((700))]:{
      padding:'6px',
    },
  },
  table: {
    minWidth: 500,
    [theme.breakpoints.down((1550))]:{
      minWidth: 400,
    },
    [theme.breakpoints.down((700))]:{
      minWidth: 300,
    },
    [theme.breakpoints.down((420))]:{
      minWidth: 100,
    },

  },
  price:{
    color:"#007bf5",
  },
  check: {
    display:"inline-block",
    background:"#007bf5",
    color:"white"
  },

  fontSize: {
    font:'25px',
  },
  orderNumber: {
    margin:'0 1px 0 1px',
    align:'center',
    display:'inline'
  },
  bedIconSize:{
    verticalAlign:'-4px'
  },
  bathIconSize:{
    verticalAlign:'-2px'
  },
}
))

function createData(orderId, numOfBedrooms, numOfBathrooms, date, price, action) {
  return { orderId, numOfBedrooms, numOfBathrooms, date, price, action }
}

const rows = [
  createData("01", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("02", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("03", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("04", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("05", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("06", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("07", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("08", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("09", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("10", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("11", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("12", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("13", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("14", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("15", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("16", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("17", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("18", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("19", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("20", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("21", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("22", "1", "3","11:30AM 22 Jan 2021", "68.5","Check"),
  createData("23", "1", "3","11:30AM 22 Jan 2021", "68.5","Check")
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
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>Order ID</TableCell>
            <TableCell align="center" className={classes.tableCell}>Details</TableCell>
            <TableCell align="center" className={classes.tableCell}>Date</TableCell>
            <TableCell align="center" className={classes.tableCell}>Price</TableCell>
            <TableCell align="center" className={classes.tableCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => ( 
            <TableRow key={row.orderId} vertical-align='middle'>
              <TableCell align="center" className={classes.tableCell}>{row.orderId}</TableCell>
              <TableCell align='center' className={classes.tableCell}>
                <KingBedIcon className={classes.bedIconSize} />
                <Typography className={classes.orderNumber}>
                  ×
                  {row.numOfBedrooms}
                </Typography>
                <BathtubIcon className={classes.bathIconSize} />
                <Typography className={classes.orderNumber}>
                  ×
                  {row.numOfBathrooms}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.date}</TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography>{row.price}</Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Button variant="contained" className={classes.check}>
                  {row.action}
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
