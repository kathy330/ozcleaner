import React from "react"
import Display from "../../components/AdminComponents/Staffs/Display"
import ButtonGroup from "../../components/AdminComponents/Staffs/ButtonGroup"
import Profile from "../../components/AdminComponents/Staffs/Profile"


function AdminStaffPage(){
  return (
    <div className="StaffPage">
      <Display />
      <ButtonGroup />
      <Profile />
    </div>
  )
}

export default AdminStaffPage