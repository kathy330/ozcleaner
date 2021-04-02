/* eslint-disable max-len */
import React from "react"

import {Switch} from 'react-router'
import AdminHeaderNavigation from "../../components/AdminComponents/Dashboard/Navigation"
import AdminTabs from "../../components/AdminComponents/Dashboard/Tabs"
import ProtectedRoute from "../../router/ProtectedRoute"
import AdminDashboardPage from "./AdminDashboardPage"
import AdminCustomersListPage from "./AdminCustomersListPage"
import AdminStaffsListPage from "./AdminStaffsListPage"
import AdminStaffsDetailsPage from "./AdminStaffDetailsPage"
import AdminCustomersDetailsPage from "./AdminCustomersDetailsPage"


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
          <ProtectedRoute path="/admin/staffs/:id" exact component={AdminStaffsDetailsPage} />
          <ProtectedRoute path="/admin/customers/:id" exact component={AdminCustomersDetailsPage} />
        </Switch>
      </div>
    )
  }
  
  export default AdminIndexPage