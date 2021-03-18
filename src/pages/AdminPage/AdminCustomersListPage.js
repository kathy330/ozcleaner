/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
} from '@material-ui/core'
import { getAllUserListRequest } from '../../store/actions'
import NavBar from '../../components/NavBarComponents/NavBar'
import Footer from '../../components/FooterComponents/Footer'
import ListTable from '../../components/AdminComponents/ListTable'
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'

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
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)
  const rowPreSet = 5
  const tableType = 'customer'

  useEffect(() => {
    dispatch(getAllUserListRequest())
  }, [])
  // console.log('KathyC: ', users)
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" component="h1">
          Customers List
        </Typography>
        {/* if loading: show loading icon */}
        {loading && <LoadingIcon />}
        {/* if user data is not empty show ListTable.  */}
        {users.length > 0 && (
          <ListTable 
            columns={columns} 
            UserData={users} 
            rowPreSet={rowPreSet} 
            tableType={tableType}
          />
        )}
        {/* if not loading && user data is empty: show no user available */}
        {users.length === 0 && 
        !loading && 
        <Typography variant="h4">No users available!</Typography>}
        {/* display any error below */}
        {error && !loading && <Typography variant="h4">{error}</Typography>}
      </Container>
      <Footer />
    </>
  )
}

export default AdminCustomersListPage