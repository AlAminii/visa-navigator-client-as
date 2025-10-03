import React from "react";
import Swal from "sweetalert2";

const ApplyVisaCard = ({ applyVisa, applyVisas, setApplyVisas }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this application?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, cancel it!",
      background: "#1e293b",
      color: "#e2e8f0",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/applyvisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = applyVisas.filter((item) => item._id !== id);
              setApplyVisas(remaining);

              Swal.fire({
                title: "Cancelled!",
                text: "Your application has been cancelled.",
                icon: "success",
                confirmButtonColor: "#3b82f6",
                background: "#1e293b",
                color: "#e2e8f0",
              });
            }
          });
      }
    });
  };

  const {
    country,
    img,
    visaType,
    time,
    fee,
    validity,
    method,
    date,
    fname,
    lname,
    email,
  } = applyVisa;

  return (
    <div className="h-full group flex flex-col relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
      
   
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={img}
          alt={country}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
        
        
        <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white text-xs font-bold shadow-lg">
          {visaType}
        </div>
      </div>

     
      <div className="px-6 pt-4 pb-2">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text">
          {country}
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        
     
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/30">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-1">
              Processing
            </p>
            <p className="text-slate-200 font-bold">{time}</p>
          </div>

          <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/30">
            <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-1">
              Fee
            </p>
            <p className="text-slate-200 font-bold">${fee}</p>
          </div>

          <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/30">
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-1">
              Validity
            </p>
            <p className="text-slate-200 font-bold">{validity}</p>
          </div>

          <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/30">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-1">
              Method
            </p>
            <p className="text-slate-200 font-bold text-sm">{method}</p>
          </div>
        </div>

      
        <div className="bg-slate-800/30 p-3 rounded-lg mb-4 border border-slate-700/30">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">📅</span>
            <div>
              <p className="text-xs text-slate-500 font-semibold">Applied Date</p>
              <p className="text-slate-300 font-medium">{new Date(date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Applicant Info */}
        <div className="bg-slate-800/30 p-4 rounded-lg mb-4 border border-slate-700/30">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Applicant Information
          </p>
          <p className="text-slate-200 font-bold text-lg mb-1">{fname} {lname}</p>
          <p className="text-sm text-slate-400">{email}</p>
        </div>


        <button
          onClick={() => handleDelete(applyVisa._id)}
          className="w-full mt-auto py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-lg hover:shadow-red-500/50 hover:from-red-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Cancel Application
        </button>
      </div>
    </div>
  );
};

export default ApplyVisaCard;