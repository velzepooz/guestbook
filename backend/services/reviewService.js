class ReviewService {
	constructor(reviewRepository) {
		this.reviewRepository = reviewRepository;
	}

	async getReviews() {
		try {
			const reviews = await this.reviewRepository.getAll();

			return reviews;
		} catch (e) {
			return new ReviewServiceError(
				'Failed to create review record',
				e,
			);
		}
	}

	async addReview(review) {
		//	TODO: validate review
		try {
			return await this.reviewRepository.create(review);
		} catch (e) {
			return new ReviewServiceError(
				'Failed to create review record',
				e,
			);
		}
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
