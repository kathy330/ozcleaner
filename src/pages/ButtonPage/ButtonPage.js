/* eslint-disable react/no-unknown-property */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Button } from "@material-ui/core"
import HeaderNavigation from '../../components/NavBarComponents/NavBar'
import {buttonStyle} from "../../styles/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
}))
  
export default function componentName() {
    const classes = useStyles()
    const styles = buttonStyle()

  return (
    <div>
      <HeaderNavigation />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}> 
          <Button className={styles.bookingButton}>Logo</Button>
          <br />
          <Button className={styles.homeBookingButton}>Logo</Button>
          <br />
          <Button className={styles.adminGreenButton}>Logo</Button>
          <br />
          <Button className={styles.adminRedButton}>Logo</Button>
          <br />
          <Button className={styles.adminBlueButton}>Logo</Button>
          <br />
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </Container>
      
    </div>

  )
}
