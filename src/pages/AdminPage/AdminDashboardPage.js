import React from "react"

import AdminHeaderNavigation from "../../components/AdminComponents/Dashboard/Navigation"
import AdminTabs from "../../components/AdminComponents/Dashboard/Tabs"

function AdminDashboardPage(){
    return (
      <div>
        {/* <NavBar /> */}
  
        {/* <AdminCustomersLeft /> */}
        <AdminHeaderNavigation />
        <AdminTabs />
        {/* <footer /> */}
      </div>
    )
  }
  
  export default AdminDashboardPage;