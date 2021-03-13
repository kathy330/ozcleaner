import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core'
import OrderTableRow from './OrderTableRow'


function OrderTable(props) {
    const { columns, UserData } = props
    console.log(columns)
    console.log(UserData)
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
              {UserData.map((data) => (
                <OrderTableRow
                  OrderID={data.OrderID}
                  Type={data.Type}
                  BedroomNum={data.BedroomNum}
                  BathroomNum={data.BathroomNum}
                  StartTime={data.StartTime}
                  EndTime={data.EndTime}
                  Status={data.Status}
                  Assignee={data.Assignee}
                />
                        ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
}

export default OrderTable