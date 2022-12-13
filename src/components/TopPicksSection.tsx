import React from 'react'
import PamelaImage from '../assets/images/pamela-reif-img.svg'
import LetsBeImage from '../assets/images/lets-be-img.svg'

const TopPicksSection: React.FC = () => {
  return (
    <>
    <section className="banners container">
      <img src={PamelaImage} alt=""/>
      <img src={LetsBeImage} alt=""/>
    </section>
    </>
  )
}

export default TopPicksSection