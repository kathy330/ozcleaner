import React from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import AdminCustomersLeft from "../../components/AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../../components/AdminComponents/AdminCustomersRight"
import AdminCustomersTop from "../../components/AdminComponents/AdminCustomersTop"
import NavBar from '../../components/NavBarComponents/NavBar'
import Footer from '../../components/FooterComponents/Footer'
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
  // bg: {
  //   backgroundColor: '#eaeaea'
  // },
  test: {
    backgroundColor: "white",
    minHeight: "85vh",
    
  },
}))

function AdminCustomersPage() {
  const classes = useStyles()// 往下滚动才会出现navbar
  return (
    <Grid className={classes.bg}>
      <NavBar />
      <Container maxWidth="md" className={classes.test}>
        <AdminCustomersTop />
        <Grid container>
          <AdminCustomersLeft />
          <AdminCustomersRight />
        </Grid>
      </Container>
      <Footer />
    </Grid>
  )
}

export default AdminCustomersPage