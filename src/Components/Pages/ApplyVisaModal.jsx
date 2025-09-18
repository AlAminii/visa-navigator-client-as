// ApplyVisaModal.jsx
const ApplyVisaModal = ({ country, modalRef }) => {
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box relative">
        <h3 className="font-bold text-lg mb-4">Apply for {country} Visa</h3>

        <form className="space-y-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Email</label>
            <input type="email" className="input input-bordered w-full" placeholder="email" />

            <label className="label">First Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="First name" />

            <label className="label">Last Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="Last Name" />

            <label className="label">Applied date</label>
            <input type="date" className="input input-bordered w-full" />

            <label className="label">Fee</label>
       
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              placeholder="Visa fee"
            />

            <div className="flex justify-between mt-4">
              <button type="submit" className="btn btn-outline w-1/2 mr-2">
                Apply
              </button>
              
              <form method="dialog" className="w-1/2">
                <button className="btn btn-error w-full">Close</button>
              </form>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

export default ApplyVisaModal;
