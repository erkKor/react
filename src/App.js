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
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;


/* 
  import Logo from '../assets/images/logo.svg'
  <img src={Logo} />

  <div style={{"height": "300px"}}></div>
*/