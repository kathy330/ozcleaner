import React from 'react'
import { Grid, Container, Paper,  Box } from '@material-ui/core'

// import { makeStyles } from '@material-ui/core/styles'

import Card from './card'
import OrderTable from './OrderTable'
import UserAvatar from "./UserAvatar"


const columns = [
  { id: 'Order ID', label: 'Order ID', minWidth: 80, align: 'left' },
  { id: 'Feature', label: 'Feature', minWidth: 120, align: 'center' },
  {
    id: 'Order Date',
    label: 'Order Date',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'Due Date',
    label: 'Order Date',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'Statues',
    label: 'Statues',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'Assignee',
    label: 'Assignee',
    minWidth: 120,
    align: 'center',
  },
]

const UserData = [
  {
    OrderID: 1,
    Type: "RC",
    BedroomNum: 2,
    BathroomNum: 3,
    StartTime: "2020-01-01T12:00:00.000+00:00",
    EndTime: "2020-01-01T12:00:00.000+00:00",
    Status: "In Progress",
    Assignee: "Jackson Seed"
  },
  {
    OrderID: 124,
    Type: "EC",
    BedroomNum: 2,
    BathroomNum: 3,
    StartTime: "2020-01-01T12:00:00.000+00:00",
    EndTime: "2020-01-01T12:00:00.000+00:00",
    Status: "Unconfirmed",
    Assignee: "Jackson Seed"
  },
  {
    OrderID: 1,
    Type: "RC",
    BedroomNum: 2,
    BathroomNum: 3,
    StartTime: "2020-01-01T12:00:00.000+00:00",
    EndTime: "2020-01-01T12:00:00.000+00:00",
    Status: "In Progress",
    Assignee: "Jackson Seed"
  },
  {
    OrderID: 1,
    Type: "RC",
    BedroomNum: 2,
    BathroomNum: 3,
    StartTime: "2020-01-01T12:00:00.000+00:00",
    EndTime: "2020-01-01T12:00:00.000+00:00",
    Status: "Completed",
    Assignee: "Jackson Seed"
  },
  {
    OrderID: 1,
    Type: "RC",
    BedroomNum: 2,
    BathroomNum: 3,
    StartTime: "2020-01-01T12:00:00.000+00:00",
    EndTime: "2020-01-01T12:00:00.000+00:00",
    Status: "In Progress",
    Assignee: "Jackson Seed"
  },
]

const UserName = [
  {
    firstName: 'Hello',
    lastName: 'World'
  },
  {
    firstName: 'Iello',
    lastName: 'Xorld'
  },
  {
    firstName: 'Jello',
    lastName: 'Yorld'
  },
  {
    firstName: 'Kello',
    lastName: 'Zorld'
  }
]


// const useStyles = makeStyles(() => ({


// }))

export default function Overview() {
  // const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box fontWeight="fontWeightBold" mb={2}>
        Quick status
      </Box>
      <Grid container spacing={6}>

        {[1, 2, 3, 4].map((x, i) =>
        (
          <Grid item>
            <Card key={x} other={i} />
          </Grid>
        )
        )}
      </Grid>
      <Paper elevation={0}>
        <Box mt={10} pl={2} pb={5}>
          <Box fontWeight="fontWeightBold" fontSize={25} ml={0.5} pt={3}>
            Recent Order
          </Box>
          <OrderTable
            columns={columns}
            UserData={UserData}
          />
        </Box>
      </Paper>

      <Paper elevation={0}>
        <Box mt={10} pl={2} pb={5}>
          <Box fontWeight="fontWeightBold" fontSize={25} ml={0.5} pt={3} pb={5}>
            Recent Customer
          </Box>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {UserName.map((user) => (
              <Grid container alignItems="center" direction="column" xs={3}>
                <UserAvatar
                  firstName={user.firstName}
                  lastName={user.lastName}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>

  )
}