const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/addReview/:id", reviewController.addReview);

router.get("/allReviews", reviewController.getReviews);

router.get("/:id", reviewController.getOneReview);

router.put("/:id", reviewController.updateReview);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;
