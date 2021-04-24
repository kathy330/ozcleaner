/* eslint-disable no-unused-vars */
/* eslint-disable */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core'

import ListTable from '../../components/AdminComponents/ListTable'

const columns = [
  { id: 'avatar', label: 'Avatar', minWidth: 80, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 120, align: 'center' },
  {
    id: 'ongoingOrders',
    label: 'Ongoing Orders',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'completedOrders',
    label: 'Completed Orders',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 240,
    align: 'center',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    marginTop: '47px',
    padding: '45px 45px 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '35px 20px',
    },
  },

  listTable: {
    alignContent: 'space-between',
    justifyContent: 'center',
    minHeight: '80vh',
  }
}))

const AdminCustomersListPage = (match) => {
  const classes = useStyles()
  const tableType = 'customer'
  const query = new URLSearchParams(match.location.search)
  const page = parseInt(query.get('page') || '1', 10)

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" component="h1">
          Customer List
        </Typography>
        <Grid container className={classes.listTable}>
          <ListTable
            columns={columns}
            tableType={tableType}
            urlpage={page}
          />
        </Grid>
      </Container>

    </>
  )
}

export default AdminCustomersListPage