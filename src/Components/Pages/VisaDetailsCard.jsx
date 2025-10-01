import { useRef } from "react";
import ApplyVisaModal from "./ApplyVisaModal";

const VisaDetailsCard = ({ visa }) => {
  console.log(visa, 'visa details cardds')
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

        <div className="hero-content text-center md:text-start gap-10 text-white">
      <div className="md:flex gap-6">
            
        <div className="flex justify-center items-center  md:w-1/2">
            <div className="max-w-lg space-y-6 border border-red-400">
            <h1 className="text-4xl font-extrabold ">{country} Visa</h1>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          
          </div>
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
      </div>

      <ApplyVisaModal visa={visa} country={country} modalRef={modalRef}></ApplyVisaModal>
    </>
  );
};

export default VisaDetailsCard;
