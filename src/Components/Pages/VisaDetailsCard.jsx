import { useRef } from "react";
import ApplyVisaModal from "./ApplyVisaModal";

const VisaDetailsCard = ({ visa }) => {
  const { method, img, fee, description, country, age, visaType, validity, time } = visa;

  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
      
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        
      
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            
    
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
                  {visaType}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                {country} Visa
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

   
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
            
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">📋</span>
                  About This Visa
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {description}
                </p>

               
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700/50">
                  <div className="text-center p-4 bg-slate-800/40 rounded-xl">
                    <div className="text-3xl font-bold text-green-400">${fee}</div>
                    <div className="text-slate-400 text-sm mt-1">Visa Fee</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/40 rounded-xl">
                    <div className="text-3xl font-bold text-purple-400">{time}</div>
                    <div className="text-slate-400 text-sm mt-1">Processing</div>
                  </div>
                </div>
              </div>

             
              <div className="space-y-6">
               
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                  <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                    <span className="text-blue-400">ℹ️</span>
                    Visa Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-all">
                      <span className="text-2xl">🎫</span>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Visa Type</div>
                        <div className="text-slate-200 font-semibold">{visaType}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-all">
                      <span className="text-2xl">📝</span>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Application Method</div>
                        <div className="text-slate-200 font-semibold">{method}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-all">
                      <span className="text-2xl">📅</span>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Validity Period</div>
                        <div className="text-slate-200 font-semibold">{validity}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-all">
                      <span className="text-2xl">⏱️</span>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Processing Time</div>
                        <div className="text-slate-200 font-semibold">{time}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition-all">
                      <span className="text-2xl">👤</span>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">Age Restriction</div>
                        <div className="text-slate-200 font-semibold">{age}+ years old</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  onClick={openModal}
                >
                  <span>Apply for Visa</span>
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="text-2xl">💡</span>
                <p className="text-sm">
                  <span className="font-semibold text-slate-200">Pro Tip:</span> Make sure all your documents are ready before applying. Processing time may vary depending on your nationality and current visa regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyVisaModal visa={visa} country={country} modalRef={modalRef} />
    </>
  );
};

export default VisaDetailsCard;