import React from 'react'
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

const UserData = [
  {
    id: '1',
    avatar: '',
    name: 'Oliver',
    ongoingOrder: '3',
    completedOrder: '26',
  },
  {
    id: '2',
    avatar: '',
    name: 'Harry',
    ongoingOrder: '1',
    completedOrder: '9',
  },
  {
    id: '3',
    avatar: '',
    name: 'Ava',
    ongoingOrder: '2',
    completedOrder: '25',
  },
  {
    id: '4',
    avatar: '',
    name: 'George',
    ongoingOrder: '2',
    completedOrder: '17',
  },
  {
    id: '5',
    avatar: '',
    name: 'Harry',
    ongoingOrder: '4',
    completedOrder: '8',
  },
  {
    id: '6',
    avatar: '',
    name: 'Emily',
    ongoingOrder: '1',
    completedOrder: '1',
  },
  {
    id: '7',
    avatar: '',
    name: 'Isabella',
    ongoingOrder: '5',
    completedOrder: '12',
  },
  {
    id: '8',
    avatar: '',
    name: 'Charlie',
    ongoingOrder: '3',
    completedOrder: '15',
  },
  {
    id: '9',
    avatar: '',
    name: 'Leo',
    ongoingOrder: '2',
    completedOrder: '71',
  },
  {
    id: '10',
    avatar: '',
    name: 'Jacob',
    ongoingOrder: '4',
    completedOrder: '6',
  },
  {
    id: '11',
    avatar: '',
    name: 'Ava',
    ongoingOrder: '4',
    completedOrder: '9',
  },
  {
    id: '12',
    avatar: '',
    name: 'Harry',
    ongoingOrder: '3',
    completedOrder: '7',
  },
  {
    id: '13',
    avatar: '',
    name: 'Isabella',
    ongoingOrder: '4',
    completedOrder: '3',
  },
  {
    id: '14',
    avatar: '',
    name: 'Mia',
    ongoingOrder: '12',
    completedOrder: '6',
  },
  {
    id: '15',
    avatar: '',
    name: 'Noah',
    ongoingOrder: '1',
    completedOrder: '88',
  },
  {
    id: '16',
    avatar: '',
    name: 'Jack',
    ongoingOrder: '1',
    completedOrder: '9',
  },
  {
    id: '17',
    avatar: '',
    name: 'Oliver',
    ongoingOrder: '1',
    completedOrder: '5',
  },
  {
    id: '18',
    avatar: '',
    name: 'Alex',
    ongoingOrder: '2',
    completedOrder: '5',
  },
  {
    id: '19',
    avatar: '',
    name: 'Sam',
    ongoingOrder: '4',
    completedOrder: '6',
  },
  {
    id: '20',
    avatar: '',
    name: 'Justin',
    ongoingOrder: '3',
    completedOrder: '8',
  },
  {
    id: '21',
    avatar: '',
    name: 'Jim',
    ongoingOrder: '2',
    completedOrder: '9',
  },
  {
    id: '22',
    avatar: '',
    name: 'Fran',
    ongoingOrder: '5',
    completedOrder: '2',
  },
  {
    id: '23',
    avatar: '',
    name: 'Ally',
    ongoingOrder: '3',
    completedOrder: '1',
  },
  {
    id: '24',
    avatar: '',
    name: 'Lily',
    ongoingOrder: '3',
    completedOrder: '2',
  },
  {
    id: '25',
    avatar: '',
    name: 'Mark',
    ongoingOrder: '2',
    completedOrder: '1',
  },
  {
    id: '26',
    avatar: '',
    name: 'Daniel',
    ongoingOrder: '0',
    completedOrder: '0',
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

function AdminCustomersListPage(){
  const classes = useStyles()
  const rowPreSet = 25
  const tableType = 'customer'
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" component="h1">
          Customers List
        </Typography>
        <ListTable 
          columns={columns} 
          UserData={UserData} 
          rowPreSet={rowPreSet} 
          tableType={tableType}
        />
      </Container>
      <Footer />
    </>
  )
}

export default AdminCustomersListPage