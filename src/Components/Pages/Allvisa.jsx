import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllvisaCard from "./AllvisaCard";

const Allvisa = () => {
  const loadedVisa = useLoaderData();
  const [visas, setVisas] = useState(loadedVisa);

  console.log(loadedVisa);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg 
                       transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl 
                       border border-white/20 relative overflow-hidden"
          >
           
            <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>

            <AllvisaCard visa={visa} visas={visas} setVisas={setVisas}></AllvisaCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allvisa;
