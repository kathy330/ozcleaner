import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"

function Home(){
  return (
    <div className="homepage">
      {/* <navbar /> */}

      <HomeTitle />
      <HomeSelectForm />
      
      {/* <footer /> */}
    </div>
  )
}

export default Home