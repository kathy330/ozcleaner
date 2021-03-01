import React from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import AdminCustomersLeft from "../../components/AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../../components/AdminComponents/AdminCustomersRight"
import AdminCustomersTop from "../../components/AdminComponents/AdminCustomersTop"
import NavBar from '../../components/NavBarComponents/NavBar'
// import Footer from '../../components/FooterComponents/Footer'

// import style from '../../components/AdminComponents/scss/Admin.module.scss'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  left: {
    backgroundColor: "lightblue",

  },
  right: {
    // padding: '20px 40px'

  },
  adminCustomersPage: {
    backgroundColor: "grey",
    height: "100vh",
  },
  bg: {
    backgroundColor: "grey"
  },
  test: {
    backgroundColor: "white",
    height: "100vh"
  }
}))

function AdminCustomersPage() {
  const classes = useStyles()
  return (
    <div className={classes.bg}>
      <NavBar />
      <Container maxWidth="md" className={classes.test}>
        <AdminCustomersTop />
        <Grid container>
          <AdminCustomersLeft />
          <AdminCustomersRight />
        </Grid>
      </Container>
      {/* <Footer /> */}
    </div>
  )
}

export default AdminCustomersPage