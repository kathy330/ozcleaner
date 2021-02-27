import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"

function Home(){
  return (
    <div className="homepage">
      <HeaderNavigation />

      <HomeTitle />
      <HomeSelectForm />
    

      {/* <footer /> */}
    </div>
  )
}

export default Home