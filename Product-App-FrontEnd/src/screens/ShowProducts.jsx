import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get("api/products/allProducts");
      //   console.log(data);
      setProducts(data);
    };
    getProductsData();
  }, []);

  return (
    <>
      <Container className="justify-content-center p-5">
        <h1 className="text-center ">All Products</h1>
        <Button size="lg" href={"/addProduct"}>
          Add Product
        </Button>
        <hr />
        <Row>
          {products.map((product) => {
            return (
              <Col md={6} lg={6} sm={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowProducts;
