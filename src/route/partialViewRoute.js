import React from "react";
import PrivateRoute from "./privateRoute";
import { Routes, Router, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Product from "../containers/Product";
import ProductPrice from "../containers/Product/ProductPrice";
import PriceList from "../containers/Product/PriceList";
import HSNContainer from "../containers/Product/HSN";
import Category from "../containers/Product/Category";
import Products from "../containers/Product/Products";

const PartialViewRoute = (props) => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/product" element={<Product />} />
      <Route path="/admin/price" element={<ProductPrice />} />
      <Route path="/admin/price-list" element={<PriceList />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/category" element={<Category />} />
      <Route path="/admin/hsn" element={<HSNContainer />} />
    </Routes>
  );
};

export default PartialViewRoute;
