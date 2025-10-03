import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal";
import AllvisaCard from "./AllvisaCard";
import Loading from "./Loading";


const Allvisa = () => {
  const loadedVisa = useLoaderData();
    const [loading, setLoading] = useState(true)
  const [visas, setVisas] = useState(loadedVisa);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    if (loadedVisa) {
      setLoading(false);
    }
  }, [loadedVisa]);

  if (loading) {
    return <Loading />;
  }

 
  const handleFilter = (visaType) => {
    setSelectedFilter(visaType);
  };


  const filteredVisas = selectedFilter === "All" 
    ? visas 
    : visas.filter(visa => visa.visaType === selectedFilter);

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{
        background: "linear-gradient(135deg, #080f28 0%, #0a1239 50%, #1a1f3a 100%)",
      }}
    >
      <div className="container mx-auto">
        
    
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
              All Available Visas
            </h1>
            <p className="text-slate-400">Explore our visa opportunities worldwide</p>
          </div>
        </Fade>

        <Fade direction="down" delay={200} triggerOnce>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-slate-300 font-semibold">Filter by Type:</span>
              <span className="text-slate-400 text-sm">
                Showing {filteredVisas.length} of {visas.length} visas
              </span>
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={() => handleFilter("All")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === "All"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
                }`}
              >
                All Visas
              </button>
              <button
                onClick={() => handleFilter("Tourist Visa")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === "Tourist Visa"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
                }`}
              >
                Tourist
              </button>
              <button
                onClick={() => handleFilter("Student Visa")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === "Student Visa"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
                }`}
              >
                Student
              </button>
              <button
                onClick={() => handleFilter("Official Visa")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === "Official Visa"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
                }`}
              >
                Official
              </button>
            </div>
          </div>
        </Fade>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisas.map((visa, index) => (
            <Slide 
              key={visa._id} 
              direction="up" 
              delay={index * 100} 
              triggerOnce
            >
              <AllvisaCard visa={visa} visas={visas} setVisas={setVisas} />
            </Slide>
          ))}
        </div>


        {filteredVisas.length === 0 && (
          <Fade triggerOnce>
            <div className="text-center py-20">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-slate-400 text-lg">No visas found for this filter.</p>
                <button
                  onClick={() => handleFilter("All")}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all"
                >
                  Show All Visas
                </button>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Allvisa;