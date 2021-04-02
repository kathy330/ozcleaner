import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@material-ui/lab'

function ListPagination(props){
  const { tableType, getPaginationPage, count } = props
  const path = `/admin/${tableType}s`
  return(
    <Route path={path}>
      {({ location }) => {
      const query = new URLSearchParams(location.search)
      const page = parseInt(query.get('page') || '1', 10)
      return (
        <Pagination
          page={page}
          count={count}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${path}${item.page === 1 ? `` : `?page=${item.page}`}`}
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