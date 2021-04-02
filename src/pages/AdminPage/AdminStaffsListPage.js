import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Footer from '../../components/FooterComponents/Footer'
import ListTable from '../../components/AdminComponents/ListTable'

const columns = [
  { id: 'avatar', label: 'Avatar', minWidth: 60, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 120, align: 'center' },
  {
    id: 'ongoingOrders',
    label: 'Ongoing Orders',
    minWidth: 70,
    align: 'center',
  },
  {
    id: 'completedOrders',
    label: 'Completed Orders',
    minWidth: 70,
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

function AdminCustomersListPage() {
  const classes = useStyles()
  const rowPreSet = 10
  const tableType = 'staff'
  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" component="h1">
          Staffs List
        </Typography>
        <ListTable
          columns={columns}
          rowPreSet={rowPreSet}
          tableType={tableType}
        />
      </Container>
      <Footer />
    </>
  )
}

export default AdminCustomersListPage
