class ReviewRepository {
  constructor(model) {
    this.model = model;
  }

  async create(review) {
    if (!this.isValidReview(review)) {
      throw new ReviewRepositoryError(
        'Invalid review fields. Not able to create record',
        review
      );
    }

    try {
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
      const reviews = await this.model.find().sort({ date: -1 });

      return this.prepareReviews(reviews);
    } catch (e) {
      throw new ReviewRepositoryError(
        'Failed to get reviews records',
        e,
      );
    }
  }

  prepareReviews(records) {
    let preparedReviews = null;

    if (Array.isArray(records)) {
      preparedReviews = records.map(record => {
        return {
          title: record.title,
          author: record.author,
          message: record.message,
          date: record.date,
          id: record._id,
        };
      });
    } else {
      preparedReviews = [];
    }

    return preparedReviews;
  }

  isValidReview(review) {
    return review.title && review.message;
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
