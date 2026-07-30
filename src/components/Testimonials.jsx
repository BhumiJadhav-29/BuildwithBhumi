import { useState, useEffect } from "react";
import { getFeedback, saveFeedback } from "../services/feedback";
import "./style.css";

function Testimonials() {

  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadFeedback();
  }, []);

  async function loadFeedback() {
    try {
      const data = await getFeedback();
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !role || !message) {
      alert("Please fill all fields.");
      return;
    }

    const newReview = {
      name,
      role,
      rating,
      message,
    };

    try {
      await saveFeedback(newReview);

      alert("Thank you for your feedback!");

      setName("");
      setRole("");
      setRating(5);
      setMessage("");

      loadFeedback();

    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  }

  return (
    <section className="section" id="testimonials">

      <h1>Feedback & Testimonials</h1>

      <form className="feedback-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <div className="rating-stars">

  {[1, 2, 3, 4, 5].map((star) => (

    <span
      key={star}
      className={star <= rating ? "star active" : "star"}
      onClick={() => setRating(star)}
    >
      ★
    </span>

  ))}

</div>

<p className="rating-text">
  {rating} / 5 Stars
</p>

        <textarea
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      <div className="testimonial-container">

        {reviews.length === 0 ? (
          <p>No feedback available yet.</p>
        ) : (
          reviews.map((review) => (
            <div
              className="testimonial-card"
              key={review._id}
            >
              <div className="avatar">👤</div>

              <h2>{review.name}</h2>

              <h4>{review.role}</h4>

              <p>{"⭐".repeat(review.rating)}</p>

              <p>"{review.message}"</p>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default Testimonials;