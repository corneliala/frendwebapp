import React from 'react'
import { IProduct } from '../models/ProductModels'
import ProductCard from './ProductCard'

interface IProductGridSection {
  title: string
  items: IProduct[]
}

const ProductGridSection: React.FC<IProductGridSection> = ({title, items = []}) => {

  return (
 
    <section className="product-grid">
        <div className="container">
            <div className="product-title">
                <h1>{title}</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                  items.map(product => <ProductCard key={product.articleNumber} product={product} /> )
                }
            </div>
        </div> 
    </section>
  )
}

export default ProductGridSection