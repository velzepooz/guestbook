const { Router } = require('express');
const bodyParser = require('body-parser');
const reviewModel = require('../models/review');
const ReviewController = require('../controllers/reviewController');
const ReviewService = require('../services/reviewService');
const ReviewRepository = require('../repository/reviewRepository');

const router = Router();
const reviewRepository = new ReviewRepository(reviewModel);
const reviewService = new ReviewService(reviewRepository);
const reviewController = new ReviewController(reviewService);

router.get(
  '/',
  reviewController.getReviews.bind(reviewController),
);

router.post(
  '/add',
  bodyParser.json(),
  reviewController.addReview.bind(reviewController),
);

module.exports = router;
