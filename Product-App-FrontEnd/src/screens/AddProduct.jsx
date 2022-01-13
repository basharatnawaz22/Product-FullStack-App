import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const addProductHandler = async (e) => {
    const data = {
      title: title,
      price: price,
      description: description,
      published: true,
    };
    await axios.post("/api/products/addProduct", data);
  };

  return (
    <>
      <Container className="mt-5 p-2">
        <h1 className="text-center">Add Product</h1>
        <hr />
        <Form onSubmit={addProductHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button type="submit">Add</Button>{" "}
          <Button href={`/products`}>All Products</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
