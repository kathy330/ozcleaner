import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

/**
 * ListPagination() is a pagination components
 * @param path: (string) route path based on the parent component's path
 * @param getPaginationPage: (func) a callback function
 * @param count: (num) number of the pages
 */
function ListPagination(props){
  const classes = useStyles()
  const { path, getPaginationPage, count } = props

  return(
    <Route path={path}>
      {({ location }) => {
      const query = new URLSearchParams(location.search)
      const page = parseInt(query.get('page') || '1', 10)
      const status = (query.get('status') || '')
      
      return (
        <Pagination
          page={page}
          count={count}
          className={classes.root}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              // eslint-disable-next-line max-len
              to={`${path}${status ? `?status=${status}&` : ''}${status ? '' : '?'}${item.page === 1 ? `` : `page=${item.page}`}`}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...item}
              onClick={() => getPaginationPage(item.page)}
            />
          )}
        />
      )
    }}
    </Route>
  )
}

export default ListPagination