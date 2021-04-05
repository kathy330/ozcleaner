import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core"
import Display from "../../components/AdminComponents/Customers/Display"
import Table from "../../components/AdminComponents/Customers/Table"
import NavBar from "../../components/NavBarComponents/NavBar"


function AdminCustomersDetailsPage(match){
  const{id}=match.match.params
  return (
   
    <Box bgcolor="#eaeaea">
      <NavBar />
      <CssBaseline />      
      <Container maxWidth="md">
        <Box bgcolor="white">
          <Display data={id} />         
        </Box>
        <Box>
          <Table data={id} />
        </Box>        
      </Container> 
    </Box>
  )
}

export default AdminCustomersDetailsPage