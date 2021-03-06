class ReviewController {
	constructor(reviewService) {
		this.reviewService = reviewService;
	}

	async getReviews(req, res) {
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
				};
			}
		} catch (e) {
			result = {
				status: false,
				message: [],
			};

			console.log(e);
		}

		res.status(200).json(result);
	}

	async addReview(req, res) {
		let result = null;

		try {
			const isCreated = await this.reviewService.addReview(req.body);

			if (isCreated) {
				result = {
					status: isCreated,
					message: 'Review is created',
				}
			}
		} catch (e) {
			result = {
				status: false,
				message: 'Failed to create review',
			};

			console.log(e);
		}

		res.status(200).json(result);
	}
}

module.exports = ReviewController;
