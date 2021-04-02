/* eslint-disable */
import React from 'react'
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@material-ui/core'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab'
import { display } from '@material-ui/system'
import { LocationOn as LocationOnIcon, Today as TodayIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root:{
    
  },
  left:{
    border: '1px solid skyblue',
    background: '#e4e4e4',
    padding: '10px 15px'
  },
  right:{
    border: '1px solid skyblue',
    background: '#fff',
    minHeight: '85vh'
  },
  card:{
    background: '#fff',
    borderLeft: '4px solid #89b153',
    borderRadius: '3px',
    padding: '10px',
    margin: '10px 0',
    '&:hover': {
      boxShadow: '3px 3px 5px #989898'
    }
  },
  infoCard:{
    borderBottom: '1px solid #e8ebfa',
    paddingRight: '15px'
  },
  list:{
    padding: 0
  },
  listItem:{
    padding: 0,
  },
  listIcon:{
    minWidth: 'auto',
    marginRight: '10px'
  },
  status:{
    marginTop: '5px',
    color: '#89b153'
  }
}))

function KathyComponent(props) {
  const classes = useStyles()
  const path = '/kathy'
  const count = 5
  const testArray = [1,2,3,4,5,6,7]
  const [displayText, setDisplayText] = React.useState('default')
  function helloWorld(row){
    console.log(row)
    setDisplayText(row)
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.left} >
          {testArray.map((row) => (
            <Grid item xs={12} key={row} onClick={() => helloWorld(row)} className={classes.card}>
              <Typography variant="subtitle2" component="h3">Three Bedroom apartment bond cleaning</Typography>
              <Grid container justify="space-between" alignItems="center" className={classes.infoCard}>
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      <LocationOnIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText secondary="West End QLD" />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      <TodayIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText secondary="Fri, 22 Jan" />
                  </ListItem>
                </List>
                <Avatar>H</Avatar>
              </Grid>
              <Typography variant="caption" component="p" className={classes.status}>CONFIRMED</Typography>
            </Grid> 
          ))}
          <Route path={path}>
              {({ location }) => {
                const query = new URLSearchParams(location.search);
                const page = parseInt(query.get('page') || '1', 10);
                return (
                  <Pagination
                    page={page}
                    count={count}
                    renderItem={(item) => (
                      <PaginationItem
                        component={Link}
                        to={`${path}${item.page === 1 ? `` : `?page=${item.page}`}`}
                        {...item}
                      />
                    )}
                  />
                );
              }}
          </Route>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.right}>
          <Typography variant="h1" >{displayText}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default KathyComponent
