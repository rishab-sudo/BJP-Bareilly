import React from 'react'
import HomeBanner from '../components/HomeBanner'
import BannerBottom from '../components/BannerBottom'
import HomeAbout from '../components/HomeAbout'
import Mission from '../components/Mission'
import Connect from '../components/Connect'
import Updates from '../components/Updates'
import Video from '../components/video'
import Service from '../components/Service'

const Home = () => {
  return (
    <div>
        <HomeBanner/>
        <BannerBottom/>
        <HomeAbout/>
        <Mission/>
        <Connect/>
        <Updates/>
        <Video/>
        <Service/>
    </div>
  )
}

export default Home