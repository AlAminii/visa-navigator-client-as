import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const ApplyVisaModal = ({ country, modalRef, visa }) => {

const {users} = useContext(AuthContext)


  console.log(visa, 'visa visa')
  console.log(country ,"from country data",)


  const handaleApply = (e)=>{
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const fname = from.fname.value;
    const lname = from.lname.value;
    const fee = from.fee.value;
    const date = from.date.value;
    console.log(email,fname,lname,fee,date)

    const applyData = {
      email,fname,lname,fee,date, 
      country: visa.country,
    img: visa.img,
    visaType: visa.visaType,
    method: visa.method,
    validity: visa.validity,
    time: visa.time,
    description: visa.description,
    age: visa.age,
    }



    fetch("http://localhost:5000/applyvisa",{
      method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(applyData)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    
  }

  return (


    <dialog ref={modalRef} className="modal">
      <div className="modal-box relative">
        <h3 className="font-bold text-lg mb-4">Apply for {country} Visa</h3>


        <form onSubmit={handaleApply} className="space-y-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Email</label>
            <input defaultValue={users.email} name="email" type="email" className="input input-bordered w-full" placeholder="email" />

            <label className="label">First Name</label>
            <input name="fname" type="text" className="input input-bordered w-full" placeholder="First name" />

            <label className="label">Last Name</label>
            <input name="lname" type="text" className="input input-bordered w-full" placeholder="Last Name" />

            <label className="label">Applied date</label>
            <input name="date" type="date" className="input input-bordered w-full" />

            <label className="label">Fee</label>
       
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              placeholder="Visa fee"
              name="fee"
              defaultValue={visa.fee}
            />

            <div className="flex justify-between mt-4">
              <button type="submit" className="btn btn-outline w-1/2 mr-2">
                Apply
              </button>
              
               <button type="button" className="btn btn-error w-1/2" onClick={() => modalRef.current.close()}>
        Close
      </button>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

export default ApplyVisaModal;
