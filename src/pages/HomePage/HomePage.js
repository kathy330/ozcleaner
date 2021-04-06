/* eslint-disable max-len */

import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
// import { loadStripe } from "@stripe/stripe-js"
// import { Elements } from "@stripe/react-stripe-js"
import HeaderNavigation from '../../components/NavBarComponents/NavBar'
import HomeContent from '../../components/HomeComponents/HomeContent'
import HomeFeedback from '../../components/HomeComponents/HomeFeedback'
import HomeHowWeWorks from '../../components/HomeComponents/HomeHowWeWorks'
import Footer from '../../components/FooterComponents/Footer'
import BackToTop from '../../components/BackToTopComponents/BackToTop'
// import user1 from '../../assets/user1.jpg' // https://www.pexels.com/zh-cn/photo/4350228/
import user2 from '../../assets/user2.jpg' // https://www.pexels.com/zh-cn/photo/4350057/
import user3 from '../../assets/user3.jpg' // https://www.pexels.com/zh-cn/photo/3206079/

import works1 from '../../assets/work1.jpg' // https://www.pexels.com/zh-cn/photo/6196685/
import works2 from '../../assets/work2.jpg' // https://www.pexels.com/zh-cn/photo/6195114/
import works3 from '../../assets/work3.jpg' // https://www.pexels.com/zh-cn/photo/6197124/

// import CheckoutForm from "../../components/testSaga/Testpay1-component"

// const promise = loadStripe("pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f")

function Home() {
  const trigger = useScrollTrigger({ disableHysteresis: true })
  
  // localStorage.setItem("authLevel", "") // 如果为空，则不能进入order 页面
  // localStorage.setItem("authLevel", "user") // 可以进入order页面
  // localStorage.setItem("authLevel", "employee") // 可以进入employee,order页面
  localStorage.setItem("authLevel", "admin") // 可以进入admin,order页面
  
  return (
    <>
      {/* navbar只有加了trigger={trigger}才会实现下拉显示和fixed位置，不填写的话是static属性 */}
      <HeaderNavigation trigger={trigger} />
      <HomeContent />

      {/* <Elements stripe={promise}>
        <CheckoutForm />
      </Elements> */}

      <HomeFeedback
        src={user2}
        title="Easy to use and effective!" 
        // subtitle="Easy to use and effective!"
        name="- Sarah"
      />
      <HomeFeedback
        src={user3}
        title="This is a fantastic site!" 
        // subtitle="User feedback here."
        name="- Robin baldwin"
      />
      <HomeHowWeWorks src1={works1} src2={works2} src3={works3} />
      <BackToTop />
      <Footer />
    </>
  )
}

export default Home
