/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { makeStyles, Box, Container, Grid, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#eaeaea',
    width: '100%',
    padding: '50px 0 80px',
  },
  subMenuLink: {
    color: '#131523',
    fontSize: '20px',
  },
})

const footers = [
  {
    title: 'Discover',
    submenu: ['How it works', 'FAQ'],
  },
  {
    title: 'Company',
    submenu: ['About us', 'Contact us'],
  },
  {
    title: 'Existing Members',
    submenu: ['Book Now', 'Login', 'Register'],
  },
]

function Footer(){
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={3} key={footer.title}>
              <Typography variant="h6">{footer.title}</Typography>
              <ul>
                {footer.submenu.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" className={classes.subMenuLink}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
