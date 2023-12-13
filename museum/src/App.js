import React from 'react';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Calendar from './pages/Calendar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import DiscoverDetails from './pages/DiscoverDetails';
import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister';
import MyAccount from './pages/MyAccount';
import Page404 from './pages/Page404';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import StoreLocator from './pages/StoreLocator';
import Whistlist from './pages/Whistlist';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blogDetails' element={<BlogDetails/>} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/contactUs' element={<ContactUs/>} />
      <Route path='/discoverDetails' element={<DiscoverDetails/>} />
      <Route path='/loginRegister' element={<LoginRegister/>} />
      <Route path='/myAccount' element={<MyAccount/>} />
      <Route path='/page404' element={<Page404/>} />
      <Route path='/productDetails' element={<ProductDetails/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/storeLocator' element={<StoreLocator/>} />
      <Route path='/whistlist' element={<Whistlist/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App