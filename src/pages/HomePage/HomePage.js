import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
import Footer from "../../components/FooterComponents/Footer"

function Home(){
  return (
    <div className="homepage">
      <HeaderNavigation />
      <HomeTitle />
      <HomeSelectForm />

      <Footer />
    </div>
  )
}

export default Home