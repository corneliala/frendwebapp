// import React, {useState, createContext, useEffect} from 'react';
// import './App.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomeView from './views/HomeView';
// import CategoriesView from './views/CategoriesView';
// import ContactsView from './views/ContactsView';
// import ProductsView from './views/ProductsView';
// import ProductDetailsView from './views/ProductDetailsView';
// import NotFoundView from './views/NotFoundView';
// import SearchView from './views/SearchView';
// import CompareView from './views/CompareView';
// import WishlistView from './views/WishlistView';
// import ShoppingcartView from './views/ShoppingcartView';
// import { ProductContext } from './contexts/contexts'



// function App() {
  
//   const [products, setProducts] = useState ({
//     all: [],
//     featuredProducts: [],
//     flashsaleProducts: []

//   })

//   useEffect(() => {
//     const fetchAll = async () => {
//       let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
//       setProducts({...products, all: await result.json()})
//     }
//     fetchAll()

//     const fetchFeauturedProducts = async () => {
//       let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
//       setProducts({...products, featuredProducts: await result.json()})
//     }
//     fetchFeauturedProducts()

//     const fetchFlashsale = async () => {
//       let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
//       setProducts({...products, flashsaleProducts: await result.json()})
//     }
//     fetchFlashsale()

//   }, [setProducts])


//   return (
    // <BrowserRouter>
    // <ProductContext.Provider value={products}>
    //   <Routes>
    //     <Route path="/" element={<HomeView />} />
    //     <Route path="/categories" element={<CategoriesView />} />
    //     <Route path="/products" element={<ProductsView />} />
    //     <Route path="/products/:name" element={<ProductDetailsView />} />
    //     <Route path="/contacts" element={<ContactsView />} />
    //     <Route path="/search" element={<SearchView />} />
    //     <Route path="/compare" element={<CompareView />} />
    //     <Route path="/wishlist" element={<WishlistView />} />
    //     <Route path="/shoppingcart" element={<ShoppingcartView />} />
    //     <Route path="*" element={<NotFoundView />} />

        
    //   </Routes>




    // </ProductContext.Provider>
      
    // </BrowserRouter>
//   );
// }

// export default App;
