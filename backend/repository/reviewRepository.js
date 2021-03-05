class ReviewRepository {
	constructor(model) {
		this.model = model;
	}

	async create(review) {
		try {
			// TODO: validate review
			const reviewRecord = new this.model(review);

			await reviewRecord.save();

			return true;
		} catch (e) {
			throw new ReviewRepositoryError(
				'Failed to create review record',
				e,
			);
		}
	}

	async getAll() {
		try {
			const reviews = await this.model.find();

			return [...reviews];
		} catch (e) {
			throw new ReviewRepositoryError(
				'Failed to create review record',
				e,
			);
		}
	}
}

class ReviewRepositoryError extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = 'Review Repository Error';
	}
}

module.exports = ReviewRepository;
