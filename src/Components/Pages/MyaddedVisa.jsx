import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UpdateVisaModal from "./UpdateVisaModal";

const MyaddedVisa = () => {
  const { users } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handaleDelate = _id =>{
    console.log(_id, 'delete kore chai id ta')

    fetch(`http://localhost:5000/visa/${_id}`,{
      method: 'DELETE',

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      const remaining = visas.filter(visa=> visa._id !==_id)
      setVisas(remaining)
    })
  }

  useEffect(() => {
    if (users?.email) {
      fetch(`http://localhost:5000/visa?email=${users.email}`)
        .then((res) => res.json())
        .then((data) => setVisas(data))
        .catch((err) => console.log(err));
    }
  }, [users?.email]);

  return (
    <div>
      <h1 className="text-2xl font-bold">My Added Visas</h1>
      {visas.length === 0 && <p>No visas added yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="card bg-white shadow-md p-4 rounded-lg"
          >
            <img
              src={visa.img}
              alt={visa.country}
              className="h-40 w-full object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{visa.country}</h2>
            <p>Type: {visa.visaType}</p>
            <p>Processing Time: {visa.time}</p>
            <p>Fee: ${visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.method}</p>
            <div className="flex gap-4 justify-center items-center mt-8">
              <button
                onClick={() => {
                  setSelectedVisa(visa); 
                  document.getElementById("my_modal_1").showModal();
                }}
                className="btn btn-outline"
              >
                Update
              </button>

              <button onClick={()=>handaleDelate(visa._id)} className="btn btn-outline">Delete</button>
            </div>
          </div>
        ))}
      </div>

    
      <UpdateVisaModal visa={selectedVisa} setVisas={setVisas} />
    </div>
  );
};

export default MyaddedVisa;
