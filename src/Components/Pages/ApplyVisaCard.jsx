const ApplyVisaCard = ({ applyVisa,applyVisas,setApplyVisas }) => {

const handaleDelate = (id)=>{
  fetch(`http://localhost:5000/applyvisa/${id}`,{
    method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
const remaining = applyVisas.filter(item=>item._id !==id);
setApplyVisas(remaining)
  })

}

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
    <div className="card lg:w-3/4 lg:card-side bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-2xl overflow-hidden text-white">
      {/* Left image */}
      <figure className="lg:w-2/3 w-full ">
        <img
          src={img}
          alt={country}
          className="h-64 w-full object-cover"
        />
      </figure>

      {/* Right content */}
      <div className="card-body lg:w-2/3 space-y-3">
        <h2 className="card-title text-2xl font-extrabold">
          {country} Visa
        </h2>

        <div className="flex flex-col border text-start gap-6 justify-center items-center gap-3 text-sm">
          <p>
            <span  className="font-semibold ">Visa Type:</span> {visaType}
          </p>
          <p>
            <span className="font-semibold">Processing Time:</span> {time} days
          </p>
          <p>
            <span className="font-semibold">Fee:</span> ${fee}
          </p>
          <p>
            <span className="font-semibold">Validity:</span> {validity}
          </p>
          <p>
            <span className="font-semibold">Method:</span> {method}
          </p>
          <p>
            <span className="font-semibold">Applied Date:</span> {appliedDate}
          </p>
          <p className="col-span-2">
            <span className="font-semibold">Applicant:</span> {applicantName} ({email})
          </p>
        </div>

        <div className="card-actions justify-end pt-2">
          <button onClick={()=>handaleDelate(applyVisa._id)} className="btn bg-red-500 hover:bg-red-600 border-none shadow-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyVisaCard;
