/* eslint-disable no-alert */
import React from 'react'
import { TableRow, TableCell, makeStyles, Typography, Box } from '@material-ui/core/'
import date from 'date-and-time'
import { KingBed, Bathtub } from '@material-ui/icons'
import { GreenStatus, RedStatus, GreyStatus } from '../../../pages/UI/Status'


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
    if (status === 'In Progress') {
        return <GreenStatus>{status}</GreenStatus>
    } if (status === "Unconfirmed") {
        return <RedStatus>{status}</RedStatus>
    }
    return <GreyStatus>{status}</GreyStatus>
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
    const { OrderID, Type, BedroomNum, BathroomNum,
        StartTime, EndTime, Status, Assignee } = props

    return (
      <TableRow>
        <TableCell align="left">
          <Box fontWeight="fontWeightBold">
            {Type + OrderID}
          </Box>
        </TableCell>
        <TableCell align="center">
          <KingBed className={classes.bedIconSize} />
          <Typography className={classes.orderNumber}>
            {`×${BedroomNum} `}
          </Typography>
          <Bathtub className={classes.bathIconSize} />
          <Typography className={classes.orderNumber}>
            ×
            {BathroomNum}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography variant="h7">
            {displayTime(StartTime)}
          </Typography>
        </TableCell>
        <TableCell align="center">
          {displayTime(EndTime)}
        </TableCell>
        <TableCell align="center">
          {StatusResult(Status)}
        </TableCell>
        <TableCell align="center">
          {Assignee}
        </TableCell>
      </TableRow>
    )
}

export default OrderTableRow