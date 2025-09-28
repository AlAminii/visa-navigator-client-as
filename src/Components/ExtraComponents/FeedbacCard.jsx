const FeedbacCard = ({ review }) => {
  return (
    <div className="p-6 border border-amber-500 text-gray-400 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm">
     
      <p className=" italic mb-4">"{review.text}"</p>

    
      <div className="flex items-center gap-3 mt-2">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full border-2 border-gray-400"
        />
        <div>
          <h4 className="font-semibold text-amber-100">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.position}</p>
          <p className="text-yellow-500 font-medium text-sm mt-1">⭐ {review.rating}/5</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbacCard;
