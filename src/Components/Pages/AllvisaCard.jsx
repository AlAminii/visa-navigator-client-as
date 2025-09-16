import { NavLink } from "react-router-dom";

const AllvisaCard = ({ visa }) => {
   
  const { visaType, validity, method, img, fee, country , _id} = visa;

  return (
    <div
      className="card bg-gradient-to-br from-indigo-500 to-teal-500
     text-gray-900 shadow-lg rounded-xl overflow-hidden
     transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
     
      <figure className="w-full">
        <img
          src={img}
          alt={country}
          className="w-full h-48 object-cover object-center"
        />
      </figure>

   
      <div className="card-body space-y-3 text-left">
        <h2 className="card-title text-xl font-bold text-white">
          {country}
        </h2>

        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold text-white">Visa Type:</span>{" "}
            {visaType}
          </p>
          <p>
            <span className="font-semibold text-white">Validity:</span>{" "}
            {validity}
          </p>
          <p>
            <span className="font-semibold text-white">Method:</span>{" "}
            {method}
          </p>
          <p>
            <span className="font-semibold text-white">Fee:</span> ${fee}
          </p>
        </div>

        <div className="card-actions justify-end pt-2">
          <button className="btn btn-sm bg-white text-indigo-600 font-semibold hover:bg-gray-200 rounded-lg shadow">
        <NavLink to={`/visa/${_id}`}> See Details</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllvisaCard;
