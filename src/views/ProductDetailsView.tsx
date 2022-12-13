import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar'


const ProductDetailsView: React.FC = () => {
    const params = useParams ()
    
  return (
    <>
    <Navbar />
    <div>
        <h1>{params.name}</h1>
    </div>
    <FooterSection />
    </>
  )
}

export default ProductDetailsView