import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect } from "react";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const { id } = useParams();
  // const history = useHistory();

  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      // console.log(data);

      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
    };
    getDataById();
  }, [id]);

  const editProductHandler = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      price: price,
      description: description,
      published: true,
    };
    await axios.put(`/api/products/${id}`, data);
    // history.push("/products");
  };
  // console.log(title);

  return (
    <>
      <Container className="mt-5 p-2">
        <h1 className="text-center">Edit Product</h1>
        <hr />
        <s></s>
        <Form onSubmit={editProductHandler}>
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
          <Button type="submit">Save</Button>{" "}
          <Button href={`/products`}>All Products</Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
