import React, {useEffect, useState} from 'react'
import "./styles/style.min.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ProductContext, FeaturedContext, SquareContext, TrippleContext} from '../src/contexts/contexts'

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import CategoriesView from "./views/CategoriesView"
import ContactView from "./views/ContactView";
import SearchView from "./views/SearchView"
import CompareView from "./views/CompareView"
import WishlistView from "./views/WishlistView"
import ShoppingCartView from "./views/ShoppingCartView"
import NotFoundView from "./views/NotFoundView";

function App() {
  const [products, setProducts] = useState ([])
  const [featured, setFeatured] = useState ([])
  const [square, setSquare] = useState ([])
  const [tripple, setTripple] = useState ([])

  useEffect(() => {
    const fetchProducts = async () =>{
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
   fetchProducts();

    const fetchFeatured = async () =>{
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeatured();

    const fetchSquare = async () =>{
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSquare(await result.json())
    }
    fetchSquare();
    
    const fetchTripple = async () =>{
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setTripple(await result.json())
    }
    fetchTripple();

  }, [])
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedContext.Provider value={featured}>
      <SquareContext.Provider value={square}>
      <TrippleContext.Provider value={tripple}>
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/Products" element={<ProductsView/>}/>
          <Route path="/Products/:id" element={<ProductDetailsView />}/>
          <Route path="/Categories" element={<CategoriesView />}/>
          <Route path="/Contacts" element={<ContactView />}/>
          <Route path="/Search" element={<SearchView />}/>
          <Route path="/Compare" element={<CompareView />}/>
          <Route path="/Wishlist" element={<WishlistView />}/>
          <Route path="/ShoppingCart" element={<ShoppingCartView />}/>
          <Route path="*" element={<NotFoundView />}/>
        </Routes>
      </TrippleContext.Provider>
      </SquareContext.Provider>
      </FeaturedContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;





/* 
const [products, setProducts] = useState({
    all: [],
    featuredProducts: [],
    squareProducts: []
  })

  useEffect(() => {
    const fetchAllProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts();

    const fetchFeaturedProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts();

    const fetchSquareProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, squareProducts: await result.json()})
    }
    fetchSquareProducts();

  }, [setProducts])
*/