/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Button, AppBar, Toolbar, IconButton, Box, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { navBarStyle } from '../../../styles/styles'



export default function AdminHeaderNavigation() {
    const style = navBarStyle()

    return (
      <div>
        <AppBar className={style.AppBar}>
          <Grid className={style.grow}>
            <Button>Logo</Button>

          </Grid> 
        </AppBar>
      </div>
    )
}