import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
// import AddReview from "./AddReview";

const ProductDetail = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [review, setReview] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/getProductReviews/${id}`);

      // console.log(data.review);
      //   console.log("hello");

      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
      setReview(data.review);
    };
    getSingleProductData();
  }, [id]);
  //   console.log("hello");
  //   console.log(`price: ${price}`);

  //handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?"))
      await axios.delete(`/api/products/${id}`);
  };

  return (
    <>
      <h1 className="text-center mt-4">Product Details</h1>
      <hr />
      <Container className="justify-conten-center">
        <Row>
          <Col>
            <Card className="m-5 p-2 rounded" style={{ width: "30rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Title>Price: ₹{price}</Card.Title>
                <Card.Text>Description: {description}</Card.Text>
                <Button href={`/product/edit/${id}`} variant="primary">
                  Edit
                </Button>{" "}
                <Button
                  onClick={() => handleDelete(id)}
                  href={`/products `}
                  variant="primary"
                >
                  Delete
                </Button>{" "}
                <Button href={`/addReview/${id}`}>Add Review</Button>{" "}
                <Button href="/products">All Products</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-5">
            <h1>Reviews</h1>
            <Row>
              {review.map((r) => {
                return <ReviewCard key={r.id} review={r} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
