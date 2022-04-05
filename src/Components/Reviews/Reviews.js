import useReviews from '../../hooks/useReview';
import Review from '../Review/Review';
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <h2 className="review-title">---What Our Customers Say---</h2>
      <div className="reviews">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;