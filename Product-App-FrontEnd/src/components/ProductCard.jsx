import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card className="shadow-lg m-1 p-2 rounded" style={{ width: "30rem" }}>
        <Card.Img src={product.image_url} alt="Card image" />
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
