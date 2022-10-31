import React, { useState, createContext } from 'react'
import "./styles/style.min.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'


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

  const ProductContext = createContext() 
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img : "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
  ])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={featuredProducts}>
        <Routes>
          <Route path="/" element={<HomeView items={featuredProducts}/>}/>
          <Route path="/Products" element={<ProductsView/>}/>
          <Route path="/Products/:id" element={<ProductDetailsView />}/>
          <Route path="/Categories" element={<CategoriesView items={featuredProducts}/>}/>
          <Route path="/Contacts" element={<ContactView />}/>
          <Route path="/Search" element={<SearchView />}/>
          <Route path="/Compare" element={<CompareView />}/>
          <Route path="/Wishlist" element={<WishlistView />}/>
          <Route path="/ShoppingCart" element={<ShoppingCartView />}/>
          <Route path="*" element={<NotFoundView />}/>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;


/* 
  import Logo from '../assets/images/logo.svg'
  <img src={Logo} />

  <div style={{"height": "300px"}}></div>
*/