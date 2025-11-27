const yearInReviews = [];

export const fetchYearInReviews = async () => {
  return yearInReviews;
};

export const fetchYearInReviewByLink = async (yearInReviewLink) => {
  return yearInReviews.find((yir) => yir.yearInReviewLink === yearInReviewLink);
};
