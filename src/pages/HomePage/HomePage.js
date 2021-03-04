import React from 'react';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import HeaderNavigation from '../../components/NavBarComponents/NavBar';
import HomeContent from '../../components/HomeComponents/HomeContent';
import HomeFeedback from '../../components/HomeComponents/HomeFeedback';
import HomeHowWeWorks from '../../components/HomeComponents/HomeHowWeWorks';
import Footer from '../../components/FooterComponents/Footer';
import BackToTop from '../../components/BackToTopComponents/BackToTop';
import user1 from '../../assets/user1.jpg'; // https://www.pexels.com/zh-cn/photo/4350228/
import user2 from '../../assets/user2.jpg'; // https://www.pexels.com/zh-cn/photo/4350057/
import works1 from '../../assets/work1.jpg'; // https://www.pexels.com/zh-cn/photo/6196685/
import works2 from '../../assets/work2.jpg'; // https://www.pexels.com/zh-cn/photo/6195114/
import works3 from '../../assets/work3.jpg'; // https://www.pexels.com/zh-cn/photo/6197124/

function Home() {
  const trigger = useScrollTrigger();

  return (
    <>
      <HeaderNavigation trigger={trigger} />
      <HomeContent />
      <HomeFeedback src={user1} />
      <HomeFeedback src={user2} />
      <HomeHowWeWorks src1={works1} src2={works2} src3={works3} />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
