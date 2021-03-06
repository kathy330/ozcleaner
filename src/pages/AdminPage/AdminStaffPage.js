/* eslint-disable react/jsx-no-undef */
import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core"
// import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Display from "../../components/AdminComponents/Staffs/Display"
import Table from "../../components/AdminComponents/Staffs/Table"
import NavBar from "../../components/NavBarComponents/NavBar"

// const { Header, Footer, Content } = Layout;

function AdminStaffPage(){
  return (
   
    <Box bgcolor="#eaeaea">
      <NavBar />
      <CssBaseline />      
      <Container maxWidth="md">
        <Box bgcolor="white">
          <Display />         
        </Box>
        <Box>
          <Table />
        </Box>        
      </Container> 
    </Box>
    // <Layout>
    //   <Header><NavBar /></Header>
    //   <Content> 
    //     {' '}
    //     <Display /> 
    //     {' '}
    //     <Table />
    //     {' '}
    //   </Content>
    //   <Footer>Footer</Footer>
    // </Layout>
   

  )
}

export default AdminStaffPage