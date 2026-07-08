import PropTypes from "prop-types";
function TestimonialCard({ name, company, review }) {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <h4>{company}</h4>
      <p>{review}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default TestimonialCard;