import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UpdateVisaModal from "./UpdateVisaModal";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyaddedVisa = () => {
  const { users } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      background: "#1e293b",
      color: "#e2e8f0",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = visas.filter((visa) => visa._id !== _id);
            setVisas(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your visa has been deleted.",
              icon: "success",
              confirmButtonColor: "#3b82f6",
              background: "#1e293b",
              color: "#e2e8f0",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete visa!",
              confirmButtonColor: "#3b82f6",
              background: "#1e293b",
              color: "#e2e8f0",
            });
          });
      }
    });
  };

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVisa(null);
  };

  useEffect(() => {
    if (users?.email) {
      fetch(`http://localhost:5000/visa?email=${users.email}`)
        .then((res) => res.json())
        .then((data) => setVisas(data))
        .catch((err) => console.log(err));
    }
  }, [users?.email]);

  return (
    <>
    <Helmet>
      <title>Visa | MyAdded Visa</title>
    </Helmet>
    <div
      className="min-h-screen py-10 px-4"
      style={{
        background: "linear-gradient(135deg, #080f28 0%, #0a1239 50%, #1a1f3a 100%)",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          My Added Visas
        </h1>

        {visas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No visas added yet.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={visa.img}
                  alt={visa.country}
                  className="h-48 w-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {visa.visaType}
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-200 mb-3">
                {visa.country}
              </h2>

              <div className="space-y-2 text-slate-300 mb-6">
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">⏱️</span>
                  <span className="text-sm">Processing: {visa.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-400">💵</span>
                  <span className="text-sm font-semibold">${visa.fee}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-purple-400">📅</span>
                  <span className="text-sm">Validity: {visa.validity}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400">📝</span>
                  <span className="text-sm">{visa.method}</span>
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleUpdateClick(visa)}
                  className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(visa._id)}
                  className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <UpdateVisaModal
            visa={selectedVisa}
            setVisas={setVisas}
            closeModal={closeModal}
          />
        )}
      </div>
    </div></>
  );
};

export default MyaddedVisa;