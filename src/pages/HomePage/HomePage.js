import React from "react"
import HeaderNavigation from "../../components/NavBarComponents/NavBar"
import HomeContent from "../../components/HomeComponents/HomeContent"
import HomeFeedback from "../../components/HomeComponents/HomeFeedback"
import HomeHowWeWorks from "../../components/HomeComponents/HomeHowWeWorks"
import BackToTop from '../../components/BackToTopComponents/BackToTop'
import Footer from '../../components/FooterComponents/Footer'

import user1 from '../../assets/user1.jpg'  // https://www.pexels.com/zh-cn/photo/4350228/
import user2 from '../../assets/user2.jpg'  // https://www.pexels.com/zh-cn/photo/4350057/
import works1 from '../../assets/work1.jpg' // https://www.pexels.com/zh-cn/photo/6196685/
import works2 from '../../assets/work2.jpg' // https://www.pexels.com/zh-cn/photo/6195114/
import works3 from '../../assets/work3.jpg' // https://www.pexels.com/zh-cn/photo/6197124/

function Home(){
  return (
    <div className="homepage">

      <HeaderNavigation />

      <HomeContent />

      <HomeFeedback src={user1} />

      <HomeFeedback src={user2} />

      <HomeHowWeWorks src1={works1} src2={works2} src3={works3} />

      <BackToTop />
      <Footer />
    </div>
  )
}

export default Home