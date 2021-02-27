import React from "react"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
import HomeContent from "../../components/HomeComponents/HomeContent"
import HomeFeedback from "../../components/HomeComponents/HomeFeedback"

function Home(){
  return (
    <div className="homepage">

      <HeaderNavigation />

      <HomeContent />

      <HomeFeedback />
      
      
      
    </div>
  )
}

export default Home