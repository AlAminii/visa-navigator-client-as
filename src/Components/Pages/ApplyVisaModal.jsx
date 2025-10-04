import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ApplyVisaModal = ({ country, modalRef, visa }) => {
  const { users } = useContext(AuthContext);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const fee = form.fee.value;
    const date = form.date.value;

    const applyData = {
      email,
      fname,
      lname,
      fee,
      date,
      country: visa.country,
      img: visa.img,
      visaType: visa.visaType,
      method: visa.method,
      validity: visa.validity,
      time: visa.time,
      description: visa.description,
      age: visa.age,
    };

    // Show loading
    Swal.fire({
      title: "Submitting Application...",
      text: "Please wait",
      allowOutsideClick: false,
      background: "#1e293b",
      color: "#e2e8f0",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetch("http://localhost:5000/applyvisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: `Your visa application for ${country} has been submitted successfully.`,
            confirmButtonColor: "#3b82f6",
            background: "#1e293b",
            color: "#e2e8f0",
          });
          
          // Close modal and reset form
          modalRef.current.close();
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit application. Please try again!",
          confirmButtonColor: "#3b82f6",
          background: "#1e293b",
          color: "#e2e8f0",
        });
      });
  };

  return (
    <dialog ref={modalRef} className="modal backdrop-blur-sm">
      <div className="modal-box max-w-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-700/50">
    
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Apply for {country} Visa
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Fill in your details to submit the application
          </p>
        </div>

        <form onSubmit={handleApply} className="space-y-4">
         
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              defaultValue={users?.email}
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
              required
              readOnly
            />
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                name="fname"
                type="text"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="John"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Last Name <span className="text-red-400">*</span>
              </label>
              <input
                name="lname"
                type="text"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="Doe"
                required
              />
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Applied Date <span className="text-red-400">*</span>
              </label>
              <input
                name="date"
                type="date"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Visa Fee (USD) <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="150"
                name="fee"
                defaultValue={visa?.fee}
                required
              />
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-4 space-y-2">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">
              Visa Information
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <div>
                <span className="text-blue-400">Type:</span> {visa?.visaType}
              </div>
              <div>
                <span className="text-cyan-400">Processing:</span> {visa?.time}
              </div>
              <div>
                <span className="text-purple-400">Validity:</span> {visa?.validity}
              </div>
              <div>
                <span className="text-teal-400">Method:</span> {visa?.method}
              </div>
            </div>
          </div>

        
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Application
            </button>

            <button
              type="button"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
              onClick={() => modalRef.current.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

     
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ApplyVisaModal;