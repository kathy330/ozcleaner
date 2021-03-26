import React from 'react'

import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core'

function ListTableHead(props){ 
  const { columns } = props
  return(
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
  )
}

export default ListTableHead