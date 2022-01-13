const db = require("../models");

// create main model
const Product = db.products;
const Review = db.reviews;

// main Work

// 1. create Product

const addProduct = async (req, res) => {
  const info = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published ? req.body.published : false,
    image_url: req.body.image_url,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

// 2. get all products

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send(products);
};

// 3. get single product

const getOneProduct = async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.status(200).send(product);
};

// 4. update Product

const updateProduct = async (req, res) => {
  const product = await Product.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).send(product);
};

// 5. delete product by id

const deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.status(200).send("product is deleted");
};

// 6. get published products

const getPublishedProducts = async (req, res) => {
  const product = await Product.findAll({ where: { published: true } });
  res.status(200).send(product);
};

// 7. connect one to many relation product and review

const getProductReviews = async (req, res) => {
  const data = await Product.findOne({
    include: [{ model: Review, as: "review" }],
    where: { id: req.params.id },
  });

  res.status(200).send(data);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
  getProductReviews,
};
