import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core"
import DisplaySTAFF from "../../components/AdminComponents/Staffs/Display"
import Table from "../../components/AdminComponents/Staffs/Table"
import NavBar from "../../components/NavBarComponents/NavBar"


function AdminStaffDetailsPage(){
  return (
   
    <Box bgcolor="#eaeaea">
      <NavBar />
      <CssBaseline />      
      <Container maxWidth="md">
        <Box bgcolor="white">
          <DisplaySTAFF />         
        </Box>
        <Box>
          <Table />
        </Box>        
      </Container> 
    </Box>
  )
}

export default AdminStaffDetailsPage