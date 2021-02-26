import React from "react"
import HomeTitle from "../../components/HomeComponents/HomeTitle"
import HomeSelectForm from "../../components/HomeComponents/HomeSelectForm"
// import DatePicker from "../../components/HomeComponents/DatePicker"

function Home(){
  return (
    <div className="homepage">
      {/* <navbar /> */}

      <HomeTitle />
      <HomeSelectForm />
      {/* <DatePicker />
      <DatePicker /> */}

      {/* <footer /> */}
    </div>
  )
}

export default Home