import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const AddVisa = () => {
  const { users } = useContext(AuthContext);

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;

   
    if (!users) {
      Swal.fire({
        icon: "error",
        title: "Authentication Required",
        text: "Please login before adding a visa!",
        confirmButtonColor: "#3b82f6",
        background: "#1e293b",
        color: "#e2e8f0",
      });
      return;
    }

    const img = form.img.value;
    const country = form.country.value;
    const visaType = form.visaType.value;
    const time = form.time.value;
    const description = form.description.value;
    const fee = form.fee.value;
    const age = form.age.value;
    const validity = form.validity.value;
    const method = form.method.value;

    const visaData = {
      img,
      country,
      visaType,
      time,
      description,
      fee,
      age,
      validity,
      method,
      UserEmail: users?.email || "",
      usersName: users?.displayName || "",
      usersPhoto: users?.photoURL || "",
      createdAt: new Date(),
    };

   
    Swal.fire({
      title: "Adding Visa...",
      text: "Please wait",
      allowOutsideClick: false,
      background: "#1e293b",
      color: "#e2e8f0",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Visa added successfully!",
            confirmButtonColor: "#3b82f6",
            background: "#1e293b",
            color: "#e2e8f0",
          });
          form.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor: "#3b82f6",
          background: "#1e293b",
          color: "#e2e8f0",
        });
      });
  };

  return (
    
<>
<Helmet>
  <title>Visa | AddVisa</title>
</Helmet>
 <div
    
      className="min-h-screen flex justify-center items-center py-10 px-4"
      style={{
        background: "linear-gradient(135deg, #080f28 0%, #0a1239 50%, #1a1f3a 100%)",
      }}
    >
      <div className="w-full max-w-4xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-10 border border-slate-700/50">
        <div className="mb-8 text-center relative">
          <div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          ></div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative">
            Add New Visa Application
          </h2>
          <p className="text-slate-400 mt-2 relative">Fill in the visa details below</p>
        </div>

        <form onSubmit={handleAddVisa} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Country Image URL <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

         
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Country Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="country"
              placeholder="e.g., United States"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

         
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Visa Type <span className="text-red-400">*</span>
            </label>
            <select
              name="visaType"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all cursor-pointer"
              required
            >
              <option value="" disabled selected className="bg-slate-800">
                Select visa type
              </option>
              <option value="Tourist Visa" className="bg-slate-800">
                Tourist Visa
              </option>
              <option value="Student Visa" className="bg-slate-800">
                Student Visa
              </option>
              <option value="Official Visa" className="bg-slate-800">
                Official Visa
              </option>
            </select>
          </div>

         
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Processing Time <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="time"
              placeholder="e.g., 15 working days"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

       
          <div className="form-control col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Required Documents
            </label>
            <div className="flex flex-wrap gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
              <label className="cursor-pointer flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/50"
                />
                <span>Valid Passport</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/50"
                />
                <span>Visa Application Form</span>
              </label>
              <label className="cursor-pointer flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/50"
                />
                <span>Passport-sized Photo</span>
              </label>
            </div>
          </div>

        
          <div className="form-control col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              rows="4"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
              placeholder="Provide detailed visa information and requirements..."
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Age Restriction <span className="text-red-400">*</span>
            </label>
            <input
              name="age"
              type="number"
              placeholder="Minimum age (e.g., 18)"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Fee (USD) <span className="text-red-400">*</span>
            </label>
            <input
              name="fee"
              type="number"
              placeholder="e.g., 150"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

         
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Validity Period <span className="text-red-400">*</span>
            </label>
            <input
              name="validity"
              type="text"
              placeholder="e.g., 6 months"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

        
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Application Method <span className="text-red-400">*</span>
            </label>
            <input
              name="method"
              type="text"
              placeholder="Online / Offline"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
</>
  );
};

export default AddVisa;