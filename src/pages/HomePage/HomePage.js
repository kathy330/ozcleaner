import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"
<<<<<<< HEAD
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
=======
// import DatePicker from "../../components/HomeComponents/DatePicker"
>>>>>>> 18203039221bd9a964eb2e026743df17ed15a5da

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