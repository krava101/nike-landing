import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="padding bg-pale-blue">
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold capitalize">
          What our <span className="text-coral-red">customers</span> say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <ul className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              raiting={review.rating}
              feedback={review.feedback}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomerReviews;
