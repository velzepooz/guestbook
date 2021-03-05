class ReviewController {
	constructor(reviewService) {
		this.reviewService = reviewService;
	}

	async getReviews(req, res) {
		res.set('Access-Control-Allow-Origin', '*');
		let result = null;

		try {
			const reviews = await this.reviewService.getReviews();

			if (reviews) {
				result = {
					status: true,
					message: reviews,
				}
			} else {
				result = {
					status: false,
					message: [],
				}
			}
		} catch (e) {
			throw new ReviewControllerError(
				'Failed to create review record',
				e,
			);
		}

		return res.status(200).json(result);
	}

	async addReview(req, res) {
		let result = null

		try {
			const isCreated = await this.reviewService.addReview(req.body);

			if (isCreated) {
				result = {
					status: isCreated,
					message: 'Created successful',
				}
			} else {
				result = {
					status: isCreated,
					message: 'Review is not created',
				}
			}
		} catch (e) {
			// Test
			result = {
				status: false,
				message: 'Failed to create review',
			}

			throw new ReviewControllerError(
				'Failed to create review record',
				e,
			);
		}

		return res.status(200).json(result);
	}
}

class ReviewControllerError extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = 'Review Controller Error';
	}
}

module.exports = ReviewController;
