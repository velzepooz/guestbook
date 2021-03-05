class ReviewService {
	constructor(reviewRepository) {
		this.reviewRepository = reviewRepository;
	}

	async getReviews() {
		try {
			const reviews = await this.reviewRepository.getAll();

			return reviews || [];
		} catch (e) {
			throw new ReviewServiceError(
				'Failed to create review record',
				e,
			);
		}
	}

	async addReview(review) {
		if (!this.isValidReview(review)) {
			throw new ReviewServiceError('Invalid review fields', review);
		}

		try {
			const preparedReview = this.prepareReviewBeforeAdd(review);

			return await this.reviewRepository.create(preparedReview);
		} catch (e) {
			throw new ReviewServiceError(
				'Failed to create review record',
				e,
			);
		}
	}

	isValidReview(review) {
		return review.title && review.message;
	}

	prepareReviewBeforeAdd(review) {
		return {
			title: review.title,
			author: review.author || 'Visitor',
			message: review.message,
		};
	}
}

class ReviewServiceError extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = 'Review Repository Error';
	}
}

module.exports = ReviewService;
