import React, {useContext, useEffect} from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import ProductGridSection from '../components/ProductGridSection';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import  { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
    <Navbar />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={products} />
    <FooterSection />
    </>
  )
}

export default ProductsView