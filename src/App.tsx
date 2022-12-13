import React, {useState, createContext, useEffect}  from 'react';
import './App.min.css';
import CreateForm from './components/CreateForm';
import UserList from './components/UserList';
import UserProvider from './contexts/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingcartView from './views/ShoppingcartView';
import { ProductContext } from './contexts/contexts'
import ProductProvider from './contexts/ProductContext';


function App() {
  
  const [products, setProducts] = useState ({
    all: [],
    featuredProducts: [],
    flashsaleProducts: []

  })


  useEffect(() => {
    const fetchAll = async () => {
      let result = await fetch('http://localhost:5000/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAll()

    const fetchFeauturedProducts = async () => {
      let result = await fetch('http://localhost:5000/api/products')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeauturedProducts()

    const fetchFlashsale = async () => {
      let result = await fetch('http://localhost:5000/api/products')
      setProducts({...products, flashsaleProducts: await result.json()})
    }
    fetchFlashsale()

  }, [setProducts])


  return (
    <BrowserRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductProvider>
    </BrowserRouter>

  );
}

export default App;
