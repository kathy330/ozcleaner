import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { makeStyles, Grid, Typography, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { getAllOrersRequest, changeOrder } from '../../../store/actions'
import OrderCard from './OrderCard'
// import OrderDetail from './OrderDetali'
import AdminOrderPage from '../../../pages/AdminPage/AdminOrderPage'
import ListPagination from '../ListPagination'
import LoadingIcon from '../LoadingIcon'
import NoDataFound from '../NoDataFound'

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
    borderLeft: '4px solid #5f647d',
    borderRadius: '3px',
    padding: '10px',
    margin: '10px 0',
    '&:hover': {
      boxShadow: '3px 3px 5px #5f647d'
    }
  },
  styleCancelled: {
    borderLeft: '4px solid #C5554B'
  },
  styleConfirm: {
    borderLeft: '4px solid #89b153'
  },
  styleProgress: {
    borderLeft: '4px solid #0878e6'
  }
}))

function OrdersLists(props) {
  const classes = useStyles()
  const { pageSize, urlPage, status } = props
  const tableType = 'order'
  const history = useHistory()
  const [curCard, setCurCard] = React.useState('default')
  const [prevCard, setPrevCard] = React.useState('unset')
  // const [selectId, setSelectId] = React.useState('')
  // const [selectType, setSelectType] = React.useState('')
  const [orderStatus, setOrderStatus] = React.useState(status)
  const listPayload = { page: urlPage, pageSize: pageSize, status: orderStatus }
  const dispatch = useDispatch()
  const data = useSelector(state => state.order.orders.result)
  const dataCount = useSelector(state => state.order.orders.count)
  const loading = useSelector(state => state.order.loading)
  const error = useSelector(state => state.order.error)
  const returnPage = (totalCount) => {
    if (totalCount < pageSize) {
      return 1
    }
    if (totalCount % pageSize !== 0) {
      return Math.floor(totalCount / listPayload.pageSize) + 1
    } 
    return Math.floor(totalCount / listPayload.pageSize)
  }
  const finalPage = returnPage(dataCount)

  useEffect(() => {
    dispatch(getAllOrersRequest(listPayload))
  },[])

  function handleSelectOrderCard(row) {
    if (prevCard === 'unset'){
      setPrevCard(row)
    } else {
      document.getElementById(`orderCard${curCard}`).classList.remove('order-card-select')
      setPrevCard(curCard)
    }
    document.getElementById(`orderCard${row}`).classList.add('order-card-select')
    setCurCard(row)
    console.log('row', row)
    // setSelectId(id)
    // setSelectType(type)
    dispatch(changeOrder(row))
    // history.push(`/admin/orders/${id}`)
  }

  // eslint-disable-next-line no-shadow
  function switchCardStyle(status) {
    switch (status){
      case 'in-progress':
        return 'styleProgress'
      case 'cancelled':
        return 'styleCancelled'
      case 'confirmed':
        return 'styleConfirm'
      default :
        return ''
    }
  }

  const selectStatusChange = (event) =>{
    setOrderStatus(event.target.value)
    listPayload.status = event.target.value
    listPayload.page = 1
    dispatch(getAllOrersRequest(listPayload))
    history.push(`/admin/orders/?status=${listPayload.status}`)
  }

  const getPaginationPage = (page) => {
    setCurCard(0)
    listPayload.page = page
    dispatch(getAllOrersRequest(listPayload))
  }

  const refreshPage = () => {
    listPayload.page = 1
    listPayload.status = ''
    dispatch(getAllOrersRequest(listPayload))
    setOrderStatus('')
    history.push(`/admin/orders/`)
  }

  
  return (
    <>
      {loading && <LoadingIcon />}
      {!loading && dataCount > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.left}>
            <div>
              <InputLabel id="orderStatusLabel">Order Status</InputLabel>
              <Route path="/admin/orders">
                <Select
                  labelId="orderStatusLabel"
                  value={orderStatus}
                  displayEmpty
                  onChange={selectStatusChange}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">All Status</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                  <MenuItem value="finished">Finished</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
              </Route>
              {data.map((row, index) => {
                const idName = `orderCard${index}`
                const classToUse = switchCardStyle(row.status.toLowerCase())
                return(
                  <Box 
                    id={idName}
                    key={idName}
                    // eslint-disable-next-line no-underscore-dangle
                    onClick={() => handleSelectOrderCard(index)}
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
            <AdminOrderPage />
          </Grid>
        </Grid>
      )}
      {!loading && data !== undefined && data.length === 0 &&
        <NoDataFound refreshPage={refreshPage} />}
      {!loading && error && <Typography variant="h4">{error}</Typography>}
    </>
  )
}
export default OrdersLists
