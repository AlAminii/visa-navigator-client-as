import { useRef } from "react";

const VisaDetailsCard = ({ visa }) => {
  const { method, img, fee, description, country, age, visaType, validity, time } = visa;

  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>

      <div
        className="hero min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-black/70"></div>

        <div className="hero-content flex-col lg:flex-row gap-10 text-white">
          
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-extrabold">{country} Visa</h1>
            <p className="text-gray-200 leading-relaxed">{description}</p>
            <button
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
              onClick={openModal}
            >
              Apply Now
            </button>
          </div>

       
          <div className="space-y-4 text-gray-200">
            <h2 className="text-2xl font-bold text-indigo-400">Visa Information</h2>
            <ul className="space-y-2 text-base">
              <li>
                <span className="font-semibold text-white">Visa Type:</span> {visaType}
              </li>
              <li>
                <span className="font-semibold text-white">Application Method:</span> {method}
              </li>
              <li>
                <span className="font-semibold text-white">Validity:</span> {validity}
              </li>
              <li>
                <span className="font-semibold text-white">Processing Time:</span> {time}
              </li>
              <li>
                <span className="font-semibold text-white">Fee:</span> ${fee}
              </li>
              <li>
                <span className="font-semibold text-white">Age Restriction:</span> {age}+
              </li>
            </ul>
            <div className="pt-4">
              <button
                className="btn bg-teal-500 hover:bg-teal-600 text-white shadow-md w-full"
                onClick={openModal}
              >
                Apply for Visa
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Apply for {country} Visa</h3>

          <form method="dialog" className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Why are you applying for this visa?"
              className="textarea textarea-bordered w-full"
              rows="3"
            ></textarea>

            <div className="modal-action">
            
              <button className="btn">Cancel</button>
             
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default VisaDetailsCard;
