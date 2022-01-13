import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card className="shadow-lg m-1 p-2 rounded" style={{ width: "30rem" }}>
        <Card.Img
          src="https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>Title: {product.title}</Card.Title>
          <Card.Title>Price: ₹{product.price}</Card.Title>
          <Card.Text>Description: {product.description}</Card.Text>
          <Button href={`product/${product.id}`} variant="primary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
