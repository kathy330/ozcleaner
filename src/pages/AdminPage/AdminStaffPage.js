import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core"
import Display from "../../components/AdminComponents/Staffs/Display"

function AdminStaffPage(){
  return (
    
    <Box bgcolor="#eaeaea">
      <CssBaseline />
      <Container maxWidth="md">
        <Box bgcolor="white">
          <Display />
        </Box>
      </Container>
       
    </Box>

  )
}

export default AdminStaffPage