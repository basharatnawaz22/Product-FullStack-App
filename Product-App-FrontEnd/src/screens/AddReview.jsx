import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router";

const AddReview = () => {
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const AddReviewHandler = async (e) => {
    const data = {
      rating: rating,
      product_id: id,
      description: description,
    };
    await axios.post(`/api/reviews/addreview/${id}`, data);
    alert("Review is successfully added!");
  };

  return (
    <>
      <Container className="mt-5 p-2">
        <h1 className="text-center">Add Review</h1>
        <hr />
        <Form onSubmit={AddReviewHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
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
          <Button href={`/product/${id}`}>Product Details</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddReview;
