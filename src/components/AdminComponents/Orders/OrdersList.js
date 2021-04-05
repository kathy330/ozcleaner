/* eslint-disable */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { makeStyles, Grid, Typography, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { getAllOrersRequest } from '../../../store/actions'
import OrderCard from './OrderCard'
import OrderDetail from './OrderDetali'
import ListPagination from '../ListPagination'
import LoadingIcon from '../LoadingIcon'

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

const useStyles = makeStyles(() => ({
  left: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '15px',
  },
  right: {
    background: '#fff',
    minHeight: '75vh'
  },
  card: {
    background: '#fff',
    borderLeft: '4px solid #89b153',
    borderRadius: '3px',
    padding: '10px',
    margin: '10px 0',
    // width: '100%', //
    // height: 'max-content', //
    // display: 'flex', //
    // flexDirection: 'column', //
    '&:hover': {
      boxShadow: '3px 3px 5px #989898'
    }
  },
  styleCancelled: {
    borderLeft: '4px solid #cc584e'
  },
  styleAssigned: {
    borderLeft: '4px solid #5f647d'
  },
  styleProgress: {
    borderLeft: '4px solid #0878e6'
  }
}))

function OrdersLists(props) {
  const classes = useStyles()
  const { urlPage } = props
  const pageSize = 7
  const tableType = 'order'
  const [curCard, setCurCard] = React.useState('default')
  const [prevCard, setPrevCard] = React.useState('unset')
  const [selectId, setSelectId] = React.useState('null')
  const [orderStatus, setOrderStatus] = React.useState('')
  const listPayload = { page: urlPage, pageSize: pageSize, status: orderStatus }
  const dispatch = useDispatch()
  const data = useSelector(state => state.allOrders.orders.result)
  const dataCount = useSelector(state => state.allOrders.orders.count)
  const loading = useSelector(state => state.allOrders.loading)
  const error = useSelector(state => state.allOrders.error)
  const returnPage = (totalCount) => {
    if (pageSize) {
      return Math.floor(totalCount / listPayload.pageSize) + 1
    } if (totalCount < pageSize) {
      return 1
    }
    return Math.floor(totalCount / listPayload.pageSize)
  }
  const finalPage = returnPage(dataCount)
  useEffect(() => {
    dispatch(getAllOrersRequest(listPayload))
  },[])

  function handleSelectOrderCard(row, id) {
    
    if (prevCard === 'unset'){
      setPrevCard(row)
    } else {
      document.getElementById(`orderCard${curCard}`).classList.remove('order-card-select')
      setPrevCard(curCard)
    }
    document.getElementById(`orderCard${row}`).classList.add('order-card-select')
    setCurCard(row)
    setSelectId(id)
    // history.push(`/admin/orders/${row}`);
  }

  function switchCardStyle(status) {
    switch(status){
      case 'in-progress':
        return 'styleProgress'
      case 'cancelled':
        return 'styleCancelled'
      case 'assigned':
        return 'styleAssigned'
      default :
        return ''
    }
  }

  const selectStatusChange = (event) =>{
    console.log(event.target.value)
    setOrderStatus(event.target.value)
  }

  const getPaginationPage = (page) => {
    listPayload.page = page
    dispatch(getAllOrersRequest(listPayload))
  }
  console.log(data)
  return (
    <>
      {loading && <LoadingIcon />}
      {!loading && data.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.left}>
            <Box>
              <InputLabel id="orderStatusLabel">Order Status</InputLabel>
              <Select 
                labelId="orderStatusLabel"
                value={orderStatus}
                displayEmpty
                onChange={selectStatusChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">All Status</MenuItem>
                <MenuItem value="confirm">Completed</MenuItem>
                <MenuItem value="in-progess">In Progress</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </Select>
            </Box>
            <div>
              {data.map((row, index) => {
                const idName = `orderCard${index}`
                const classToUse = switchCardStyle(row.status.toLowerCase())
                return(
                  <Box 
                    id={idName}
                    key={idName}
                    onClick={() => handleSelectOrderCard(index, row._id)}
                    className={`${classes.card} ${classes[classToUse]}`}
                    aria-hidden="true"
                  >
                    <OrderCard 
                      title={row.title}
                      address={row.address}
                      date={row.startTime}
                      status={row.status}
                      classToUse={classToUse}
                      name={row.firstName}
                    />
                  </Box>
                )
              })}
            </div>
            <ListPagination
              tableType={tableType}
              getPaginationPage={getPaginationPage}
              count={finalPage}
            />
          </Grid>
          <Grid item xs={12} sm={8} className={classes.right}>
            <OrderDetail id={selectId} />
          </Grid>
        </Grid>
      )}
      {!loading && data !== undefined && data.length === 0 &&
        <Typography variant="h4">No order found!</Typography>}
      {!loading && error && <Typography variant="h4">{error}</Typography>}
    </>
  )
}
export default OrdersLists
