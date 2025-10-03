import { useState, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import FeedbacCard from "./FeedbacCard";

const FeedbackSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => {
        console.log(data, 'review data');
        setReviews(data);
      });
  }, []);

  return (
    <div className="py-10">
    
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
            What Our Clients Say
          </h2>
          <p className="text-slate-400">Real experiences from our satisfied customers</p>
        </div>
      </Fade>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Slide 
            key={review.id} 
            direction="up" 
            delay={index * 100} 
            triggerOnce
          >
            <FeedbacCard review={review} />
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;