import React from 'react'
import { IProduct } from '../models/ProductModels'



interface IProductCard {
  product: IProduct
}



const ProductCard: React.FC<IProductCard> = ({product}) => {
  return (
<div className="col">
    <div className="card">
      <ul className="card-menu">
          <li><a href="#"><i className="fa-regular fa-heart "></i></a></li>
          <li><a href="#"><i className="fa-light fa-code-compare fa-flip-vertical"></i></a></li>
          <li><a href="#"><i className="fa-regular fa-bag-shopping "></i></a></li>
      </ul>
      <img src={product.imageName} className="card-img-top" alt={product.name} />
      <div className="card-background">
          <a href="#" className="btn btn-theme">QUICK VIEW</a>
      </div>
    </div>
    <div className="product-description">
      <p className="category">{product.category}</p>
      <h1 className="product-title">{product.name}</h1>
      <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
      </div>
      <p className="price">{product.price}</p>
    </div>
  </div> 
  )
}

export default ProductCard