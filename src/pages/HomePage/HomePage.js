import React from "react"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
import HomeContent from "../../components/HomeComponents/HomeContent"
import HomeFeedback from "../../components/HomeComponents/HomeFeedback"
import BackToTop from '../../components/BackToTopComponents/BackToTop'

import user1 from '../../assets/user1.jpg'  // https://www.pexels.com/zh-cn/photo/4350228/
import user2 from '../../assets/user2.jpg'  // https://www.pexels.com/zh-cn/photo/4350057/

function Home(){
  return (
    <div className="homepage">

      <HeaderNavigation />

      <HomeContent />

      <HomeFeedback src={user1} />

      <HomeFeedback src={user2} />

      <BackToTop />

      
    </div>
  )
}

export default Home