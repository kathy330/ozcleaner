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
  bg: {
    backgroundColor: '#eaeaea'
  },
  test: {
    backgroundColor: "white",
    height: "100vh",
  },
  top: {
    order: 1,
    [theme.breakpoints.up('xs')]: {
      order: 1,
    },
  },
  left: {
    order: 2,
    [theme.breakpoints.up('xs')]: {
      order: 3,
    },
  },
  right: {
    order: 3, [theme.breakpoints.up('xs')]: {
      order: 2,
    },
  },
}))

function AdminCustomersPage() {
  const classes = useStyles()// 往下滚动才会出现navbar
  return (
    <Grid className={classes.bg}>
      <NavBar />
      <Container maxWidth="md" className={classes.test}>
        <AdminCustomersTop className={classes.top} />
        <Grid container>
          <AdminCustomersLeft className={classes.left} />
          <AdminCustomersRight className={classes.right} />
        </Grid>
      </Container>
      <Footer />
    </Grid>
  )
}

export default AdminCustomersPage