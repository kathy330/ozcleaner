/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
} from '@material-ui/core'
import NavBar from '../../components/NavBarComponents/NavBar'
import Footer from '../../components/FooterComponents/Footer'
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
    minHeight: '75vh',
    marginTop: '1px',
    padding: '35px 15px',
    background: '#fff',
    [theme.breakpoints.down('xs')]: {
      padding: '25px 10px',
    },
  },
}))

const AdminCustomersListPage = () => {
  const classes = useStyles()
  const rowPreSet = 10
  const tableType = 'customer'

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" component="h1">
          Customer List
        </Typography>
        <ListTable
          columns={columns}
          tableType={tableType}
          rowPreSet={rowPreSet}
        />
      </Container>
      <Footer />
    </>
  )
}

export default AdminCustomersListPage