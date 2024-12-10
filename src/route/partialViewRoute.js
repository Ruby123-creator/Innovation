import React from "react";
import PrivateRoute from "./privateRoute"
import { Routes, Route } from "react-router-dom";
import Dashboard from '../containers/Dashboard'
import Product    from "../containers/Product"
import ProductPrice from "../containers/Product/ProductPrice"
import PriceList from "../containers/Product/PriceList"
import HSNContainer from "../containers/Product/HSN"
import Category from "../containers/Product/Category";
import Products from "../containers/Product/Products";

const PartialViewRoute = (props) => {
  return (
    
      <Routes>
        <Route
         {...props}
         path="/admin/dashboard"
          element={<Dashboard/>}
        />
        <Route
          
         path="/admin/product"
          element={<Product/>}
        />
      <Route
          
          path="/admin/product-price"
           element={<PriceList/>}
         />
         
         <Route
          
          path="/admin/category"
           element={<Category/>}
         />
         <Route
          
          path="/admin/hsn"
           element={<HSNContainer/>}
         />
     

      </Routes>
    
  );
};

export default PartialViewRoute;
