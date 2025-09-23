import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddVisa = () => {
  const {users} = useContext(AuthContext)
    console.log(users, 'userss sss ss ')

  const handleAddVisa = (e) => {
    
  
    e.preventDefault();
    const form = e.target;
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
       img, country, visaType, time, description, fee, age, validity, method,
      
       UserEmail: users?.email,
       usersName:users?.displayName,
       usersPhoto:users?.photoURL,
       createdAt: new Date() 

      
      };
    console.log(visaData);

    fetch('http://localhost:5000/visa',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(visaData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data, 'modal apply')
    })

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Add a New Visa
        </h2>
        <form onSubmit={handleAddVisa} className="grid grid-cols-1 md:grid-cols-2 gap-6">

         
          <div className="form-control">
            <label className="label font-medium">Country Image (URL)</label>
            <input type="text" name="img" placeholder="Paste image link" className="input input-bordered" />
          </div>

     
          <div className="form-control">
            <label className="label font-medium">Country Name</label>
            <input type="text" name="country" placeholder="Country Name" className="input input-bordered" />
          </div>

     
          <div className="form-control">
            <label className="label font-medium">Visa Type</label>
            <select name="visaType" className="select select-bordered">
              <option disabled selected>Select visa type</option>
              <option>Tourist Visa</option>
              <option>Student Visa</option>
              <option>Official Visa</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium">Processing Time</label>
            <input type="text" name="time" placeholder="e.g. 15 working days" className="input input-bordered" />
          </div>

      
          <div className="form-control col-span-1 md:col-span-2">
            <label className="label font-medium">Required Documents</label>
            <div className="flex flex-wrap gap-4">
              <label className="cursor-pointer flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" /> Valid Passport
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" /> Visa Application Form
              </label>
              <label className="cursor-pointer flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" /> Passport-sized Photo
              </label>
            </div>
          </div>

    
          <div className="form-control col-span-1 md:col-span-2">
            <label className="label font-medium">Description</label>
            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Add visa description..."></textarea>
          </div>

     
          <div className="form-control">
            <label className="label font-medium">Age Restriction</label>
            <input name="age" type="number" placeholder="Minimum age" className="input input-bordered" />
          </div>

       
          <div className="form-control">
            <label className="label font-medium">Fee (USD)</label>
            <input name="fee" type="number" placeholder="Enter fee" className="input input-bordered" />
          </div>

     
          <div className="form-control">
            <label className="label font-medium">Validity</label>
            <input name="validity" type="text" placeholder="e.g. 6 months" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label font-medium">Application Method</label>
            <input name="method" type="text" placeholder="Online/Offline" className="input input-bordered" />
          </div>

          
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="btn btn-primary w-full mt-4">
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
