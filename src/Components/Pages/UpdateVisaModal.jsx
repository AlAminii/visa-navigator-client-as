const UpdateVisaModal = ({ visa }) => {
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

    console.log("Updated Visa Data:", updatedVisa);
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box max-w-3xl">
        <h3 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Update Visa Information
        </h3>

        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Country Image */}
          <div className="form-control">
            <label className="label font-medium">Country Image (URL)</label>
            <input
              type="text"
              name="img"
              defaultValue={visa.img}
              className="input input-bordered"
            />
          </div>

          {/* Country Name */}
          <div className="form-control">
            <label className="label font-medium">Country Name</label>
            <input
              type="text"
              name="country"
              defaultValue={visa.country}
              className="input input-bordered"
            />
          </div>

          {/* Visa Type */}
          <div className="form-control">
            <label className="label font-medium">Visa Type</label>
            <select name="visaType" className="select select-bordered" defaultValue={visa.visaType}>
              <option disabled>Select visa type</option>
              <option>Tourist Visa</option>
              <option>Student Visa</option>
              <option>Official Visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="label font-medium">Processing Time</label>
            <input
              type="text"
              name="time"
              defaultValue={visa.time}
              className="input input-bordered"
            />
          </div>

          {/* Description */}
          <div className="form-control col-span-1 md:col-span-2">
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={visa.description}
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>

          {/* Age Restriction */}
          <div className="form-control">
            <label className="label font-medium">Age Restriction</label>
            <input
              name="age"
              type="number"
              defaultValue={visa.age}
              className="input input-bordered"
            />
          </div>

          {/* Fee */}
          <div className="form-control">
            <label className="label font-medium">Fee (USD)</label>
            <input
              name="fee"
              type="number"
              defaultValue={visa.fee}
              className="input input-bordered"
            />
          </div>

          {/* Validity */}
          <div className="form-control">
            <label className="label font-medium">Validity</label>
            <input
              name="validity"
              type="text"
              defaultValue={visa.validity}
              className="input input-bordered"
            />
          </div>

          {/* Application Method */}
          <div className="form-control">
            <label className="label font-medium">Application Method</label>
            <input
              name="method"
              type="text"
              defaultValue={visa.method}
              className="input input-bordered"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
            <button type="button" className="btn" onClick={() => document.getElementById("my_modal_1").close()}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateVisaModal;
