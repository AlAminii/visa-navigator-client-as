import ClientFeedback from "../ExtraComponents/ClientFeedback";
import AllvisaCard from "./AllvisaCard";
import { Link } from "react-router-dom";

const Hero = ({ visas }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Latest 6 Visa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.map((visa) => (
          <AllvisaCard key={visa._id} visa={visa} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/allvisa">
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg">
            See All Visa
          </button>
        </Link>
      </div>
      <div className="bg-[#080f28] border-blue-500 p-6 mt-4 rounded-xl ">
      <ClientFeedback></ClientFeedback>
      </div>
    </div>
  );
};

export default Hero;
