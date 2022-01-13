const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/addProduct", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProducts);

// get product reviews
router.get("/getProductReviews/:id", productController.getProductReviews);

router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
