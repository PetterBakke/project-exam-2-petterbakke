import '../src/sass/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import PageDetail from './components/details/Details';
import Contact from './components/contact/Contact';
import LoginPage from './components/login/LoginPage';
import AuthProvider from "../src/components/context/AuthContext"
import DashboardPage from "../src/components/dashboard/Dashboard";
import AddProductsPage from "../src/components/addproduct/AddProductsPage";
import AddProducts from "../src/components/addproduct/AddProduct";

function App() {
  return (
    <>
      {/* <AuthProvider> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="hotel/:id" element={<PageDetail />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/posts" element={<AddProductsPage />} />
          <Route path="/dashboard/posts/add" element={<AddProducts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </AuthProvider> */}
    </>


  );
}

export default App;