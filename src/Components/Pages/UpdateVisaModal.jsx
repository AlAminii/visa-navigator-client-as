import Swal from "sweetalert2";

const UpdateVisaModal = ({ visa, setVisas, closeModal }) => {
  if (!visa) return null;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedVisa = {
      img: form.img.value,
      country: form.country.value,
      visaType: form.visaType.value,
      time: form.time.value,
      description: form.description.value,
      age: form.age.value,
      fee: form.fee.value,
      validity: form.validity.value,
      method: form.method.value,
    };

    Swal.fire({
      title: "Updating...",
      text: "Please wait",
      allowOutsideClick: false,
      background: "#1e293b",
      color: "#e2e8f0",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetch(`http://localhost:5000/visa/${visa._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setVisas((prevVisas) =>
            prevVisas.map((v) =>
              v._id === visa._id ? { ...v, ...updatedVisa } : v
            )
          );

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Visa updated successfully!",
            confirmButtonColor: "#3b82f6",
            background: "#1e293b",
            color: "#e2e8f0",
          });

          closeModal();
        }
      })
      .catch(() => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-3xl mx-4 bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-3xl shadow-2xl border border-slate-700/50 p-8 max-h-[90vh] overflow-y-auto">
        <div className="mb-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Update Visa Information
          </h3>
        </div>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Country Image */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Country Image URL <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="img"
              defaultValue={visa.img}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Country Name */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Country Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="country"
              defaultValue={visa.country}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Visa Type */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Visa Type <span className="text-red-400">*</span>
            </label>
            <select
              name="visaType"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all cursor-pointer"
              defaultValue={visa.visaType}
              required
            >
              <option disabled className="bg-slate-800">
                Select visa type
              </option>
              <option className="bg-slate-800">Tourist Visa</option>
              <option className="bg-slate-800">Student Visa</option>
              <option className="bg-slate-800">Official Visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Processing Time <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="time"
              defaultValue={visa.time}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              defaultValue={visa.description}
              rows="4"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Age Restriction */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Age Restriction <span className="text-red-400">*</span>
            </label>
            <input
              name="age"
              type="number"
              defaultValue={visa.age}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Fee */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Fee (USD) <span className="text-red-400">*</span>
            </label>
            <input
              name="fee"
              type="number"
              defaultValue={visa.fee}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Validity */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Validity Period <span className="text-red-400">*</span>
            </label>
            <input
              name="validity"
              type="text"
              defaultValue={visa.validity}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Application Method */}
          <div className="form-control">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Application Method <span className="text-red-400">*</span>
            </label>
            <input
              name="method"
              type="text"
              defaultValue={visa.method}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVisaModal;