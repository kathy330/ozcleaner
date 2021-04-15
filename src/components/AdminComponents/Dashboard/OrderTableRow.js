/* eslint-disable no-alert */
import React from 'react'
import { TableRow, TableCell, makeStyles, Typography, Box } from '@material-ui/core/'
import date from 'date-and-time'
import { KingBed, Bathtub } from '@material-ui/icons'
import { GreenStatus, RedStatus, GreyStatus, BlueStatus } from '../../UIComponents/Status'


const useStyle = makeStyles(() => ({
    fontSize: {
        font: '25px',
    },
    orderNumber: {
        margin: '0 1px 0 1px',
        align: 'center',
        display: 'inline'
    },
    bedIconSize: {
        verticalAlign: '-4px'
    },
    bathIconSize: {
        verticalAlign: '-2px'
    },
}))


// StatusResult() is to return different style status component
function StatusResult(status) {
    if (status === 'confirmed') {
        return <GreenStatus>{status.toUpperCase()}</GreenStatus>
    } if (status === "cancelled") {
        return <RedStatus>{status.toUpperCase()}</RedStatus>
    } if (status === "in-progress") {
      return <BlueStatus>{status.toUpperCase()}</BlueStatus>
  } 
    return <GreyStatus>{status.toUpperCase()}</GreyStatus>
}

function displayTime(time) {
    // 2020-01-01T12:00:00.000+00:00

    let result = date.parse(time.split('.')[0], 'YYYY-MM-DD hh:mm:ss')
    result = result.toString().split(" ")
    return `${date.transform(result[4], 'HH:mm:ss', 'hh:mmA')} 
    ${result[2]} ${result[1]},${result[3]}`
}

function OrderTableRow(props) {
    const classes = useStyle()
    const { taskID, type, bedroomNum, bathroomNum,
        startTime, endTime, status, employeeDetail } = props
    return (
      <TableRow>
        <TableCell align="left">
          <Typography variant="h6">
            {type + taskID}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <KingBed className={classes.bedIconSize} />
          <Typography className={classes.orderNumber}>
            {`×${bedroomNum} `}
          </Typography>
          <Bathtub className={classes.bathIconSize} />
          <Typography className={classes.orderNumber}>
            ×
            {bathroomNum}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography variant="h6">
            {displayTime(startTime)}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography variant="h6">
            {endTime == null? "Pending":displayTime(endTime)}
          </Typography>
        </TableCell>
        <TableCell align="center">
          {StatusResult(status)}
        </TableCell>
        <TableCell align="center">
          <Typography variant="h6">
            {employeeDetail.length === 0 ? "Pending" :
           `${employeeDetail[0].name.firstName  } ${  employeeDetail[0].name.lastName}`}
          </Typography>
        </TableCell>
      </TableRow>
    )
}

export default OrderTableRow