import React from "react";

const ApplyVisaCard = ({ applyVisa, applyVisas, setApplyVisas }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/applyvisa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = applyVisas.filter((item) => item._id !== id);
        setApplyVisas(remaining);
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
    appliedDate,
    applicantName,
    email,
  } = applyVisa;

  return (
    <div className="group flex flex-col relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={img}
          alt={country}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
    
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
      </div>

   
      <div className="px-6 pt-4">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          {country}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"></div>
      </div>

     
      <div className="p-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Visa Type
            </p>
            <p className="text-gray-900 font-bold text-lg">{visaType}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">
              Processing
            </p>
            <p className="text-gray-900 font-bold text-lg">{time} days</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-100">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
              Fee
            </p>
            <p className="text-gray-900 font-bold text-lg">${fee}</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-100">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              Validity
            </p>
            <p className="text-gray-900 font-bold text-lg">{validity}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6 bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Method:</span>{" "}
              {method}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Applied:</span>{" "}
              {appliedDate}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-5 rounded-2xl mb-6 border border-slate-200">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Applicant Information
          </p>
          <p className="text-gray-900 font-bold text-lg mb-1">{applicantName}</p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>

        <button
          onClick={() => handleDelete(applyVisa._id)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Cancel Application
        </button>
      </div>
    </div>
  );
};

export default ApplyVisaCard;
