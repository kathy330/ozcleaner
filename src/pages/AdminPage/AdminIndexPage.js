import React from "react"

import {Switch} from 'react-router'
import AdminHeaderNavigation from "../../components/AdminComponents/Dashboard/Navigation"
import AdminTabs from "../../components/AdminComponents/Dashboard/Tabs"
import ProtectedRoute from "../../router/ProtectedRoute"
import AdminDashboardPage from "./AdminDashboardPage"
import AdminCustomersListPage from "./AdminCustomersListPage"
import AdminStaffsListPage from "./AdminStaffsListPage"
import Footer from '../../components/FooterComponents/Footer'


function AdminIndexPage(){
    return (
      <div>
        {/* <NavBar /> */}
  
        {/* <AdminCustomersLeft /> */}
        <AdminHeaderNavigation />
        <AdminTabs />
        {/* <footer /> */}

        <Switch>
          <ProtectedRoute path="/dashboard" component={AdminDashboardPage} />
          <ProtectedRoute path="/customers" component={AdminCustomersListPage} />
          <ProtectedRoute path="/staffs" component={AdminStaffsListPage} />
        </Switch>

        <Footer />
      </div>
    )
  }
  
  export default AdminIndexPage