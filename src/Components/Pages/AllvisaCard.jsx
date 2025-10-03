import { NavLink } from "react-router-dom";

const AllvisaCard = ({ visa }) => {
  const { visaType, validity, method, img, fee, country, _id } = visa;

  return (
    <div className="h-full group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.03] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
     
      <div className="relative overflow-hidden h-52">
        <img
          src={img}
          alt={country}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
        
      
        <div className="absolute top-3 right-3 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm">
          {visaType}
        </div>
        
       
        <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl border border-white/30">
          🌍
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text">
          {country}
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:bg-slate-800/60 transition-all">
            <span className="text-purple-400 text-lg">📅</span>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Validity</p>
              <p className="text-sm text-slate-300 font-medium">{validity}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:bg-slate-800/60 transition-all">
            <span className="text-green-400 text-lg">💵</span>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Fee</p>
              <p className="text-sm text-slate-300 font-bold">${fee}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
          <span className="text-cyan-400 text-lg">📝</span>
          <div className="flex-1">
            <p className="text-xs text-slate-500 font-semibold">Application Method</p>
            <p className="text-sm text-slate-300 font-medium">{method}</p>
          </div>
        </div>

        <NavLink to={`/visa/${_id}`} className="block">
          <button className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <span>See Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </NavLink>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AllvisaCard;