import { useState } from "react";
import {  useEffect } from "react";
import FeedbacCard from "./FeedbacCard";





const FeedbackSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>
           {
             console.log(data, 'review data')
             setReviews(data)
           }
           
        )
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                reviews.map((review)=> <FeedbacCard review={review} key={review.id} ></FeedbacCard>)
            }
            
        </div>
    );
};

export default FeedbackSection;