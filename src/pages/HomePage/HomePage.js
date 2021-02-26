import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
// import DatePicker from "../../components/HomeComponents/DatePicker"

function Home(){
  return (
    <div className="homepage">
      <HeaderNavigation />
      <HomeTitle />
      <HomeSelectForm />
      {/* <DatePicker />
      <DatePicker /> */}

      {/* <footer /> */}
    </div>
  )
}

export default Home