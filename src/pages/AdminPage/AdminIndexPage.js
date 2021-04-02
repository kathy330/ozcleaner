import React from "react"

import {Switch} from 'react-router'
import AdminHeaderNavigation from "../../components/AdminComponents/Dashboard/Navigation"
import AdminTabs from "../../components/AdminComponents/Dashboard/Tabs"
import ProtectedRoute from "../../router/ProtectedRoute"
import AdminDashboardPage from "./AdminDashboardPage"
import AdminCustomersListPage from "./AdminCustomersListPage"
import AdminStaffsListPage from "./AdminStaffsListPage"


function AdminIndexPage(){
    return (
      <div>
        {/* <NavBar /> */}
  
        {/* <AdminCustomersLeft /> */}
        <AdminHeaderNavigation />
        <AdminTabs />
        {/* <footer /> */}

        <Switch>
          <ProtectedRoute path="/admin/dashboard" component={AdminDashboardPage} />
          <ProtectedRoute path="/admin/customers" exact component={AdminCustomersListPage} />
          <ProtectedRoute path="/admin/staffs" exact component={AdminStaffsListPage} />
        </Switch>
      </div>
    )
  }
  
  export default AdminIndexPage