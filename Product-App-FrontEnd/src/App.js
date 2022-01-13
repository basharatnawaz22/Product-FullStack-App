import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import ProductDetail from "./screens/ProductDetail";
import ShowProducts from "./screens/ShowProducts";
import AddReview from "./screens/AddReview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addReview/:id" element={<AddReview />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
