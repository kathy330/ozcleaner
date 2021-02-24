import React from "react"
import HomeBackground from "../../components/HomeComponents/HomeBackground"


function Home(){
    return (
      <div className="homepage">
        {/* <div className="homepage__navbar">
          <navbar />
        </div> */}

        <div className="homepage__background">
          <HomeBackground />
        </div>

        {/* <div className="homepage__footer">
          <footer />
        </div> */}
      </div>
    )
}

export default Home