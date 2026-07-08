import TestimonialCard from "./TestimonialCard";
import "../styles/Testimonials.css";

function Testimonials() {

    return (

        <section className="testimonials">

            <h2>What Students Say</h2>

            <div className="testimonial-container">

                <TestimonialCard
                    name="Rahul Sharma"
                    company="Google"
                    review="InterviewAce AI completely changed the way I prepared for coding interviews."
                />

                <TestimonialCard
                    name="Priya Kapoor"
                    company="Microsoft"
                    review="The AI mentor and company-wise preparation were my favorite features."
                />

                <TestimonialCard
                    name="Aman Verma"
                    company="Amazon"
                    review="A one-stop platform for placements. Highly recommended!"
                />

            </div>

        </section>

    );
}

export default Testimonials;