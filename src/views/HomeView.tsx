import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import FooterSection from '../components/FooterSection';
import ProductGridSection from '../components/ProductGridSection';
import TopPicksSection from '../components/TopPicksSection';
import FlashsaleSection from '../components/FlashsaleSection';
import { ProductContextType, useProductContext } from '../contexts/ProductContext';

const HomeView: React.FC = () => {
  document.title ='Fixxo.'
  const {featured, flashsale, getFeatured, getFlashsale} = useProductContext() as ProductContextType
  
  
  useEffect(() => {
    getFeatured(8)
    getFlashsale(4)
  }, [])


  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGridSection title="Featured Products" items={featured}/>
      <TopPicksSection />
      <FlashsaleSection items={flashsale} />
      <FooterSection />
      
      

    </>
  )
}
// 

export default HomeView;