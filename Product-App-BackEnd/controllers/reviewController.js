const db = require("../models");

// model
const Review = db.reviews;

// functions

// 1. Add review
const addReview = async (req, res) => {
  const data = {
    product_id: req.params.id,
    rating: req.body.rating,
    description: req.body.description,
  };

  const review = await Review.create(data);
  res.status(200).send(review);
};

// 2. get all reviews
const getReviews = async (req, res) => {
  const reviews = await Review.findAll();
  res.status(200).send(reviews);
};

// 3. get single review
const getOneReview = async (req, res) => {
  const review = await Review.findAll({ where: { id: req.params.id } });
  res.status(200).send(review);
};

// 4. update review
const updateReview = async (req, res) => {
  const data = {
    rating: req.body.rating,
    description: req.body.description,
  };
  await Review.update(data, { where: { id: req.params.id } });
  res.status(200).send("review is updated");
};

// 5. delete review
const deleteReview = async (req, res) => {
  const review = await Review.destroy({ where: { id: req.params.id } });
  res.status(200).send("review is deleted");
};

module.exports = {
  addReview,
  getReviews,
  getOneReview,
  updateReview,
  deleteReview,
};
