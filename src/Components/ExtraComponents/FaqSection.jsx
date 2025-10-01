const FaqSection = () => {
  return (
    <div className="my-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>

      
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg mb-3">
        <summary className="collapse-title font-semibold">
          How do I apply for a visa through your website?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          You can start by selecting your destination country and filling out the
          online visa application form. After submission, you’ll receive updates
          via email.
        </div>
      </details>

     
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg mb-3">
        <summary className="collapse-title font-semibold">
          How long does the visa processing take?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          Processing times depend on the country and visa type. On average, it
          may take between 7–15 business days. We’ll notify you of every update.
        </div>
      </details>

      
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg mb-3">
        <summary className="collapse-title font-semibold">
          What documents are required for a tourist visa?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          Typically, you’ll need a valid passport, recent photographs, proof of
          accommodation, travel itinerary, and financial statements. Requirements
          vary by country.
        </div>
      </details>

      
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg mb-3">
        <summary className="collapse-title font-semibold">
          Can I track my visa application status online?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          Yes! After submitting your application, you’ll receive a tracking ID
          that lets you check your visa status directly on our website.
        </div>
      </details>

     
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg mb-3">
        <summary className="collapse-title font-semibold">
          Do you offer urgent or express visa processing?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          Yes, for certain countries we provide expedited services with an
          additional fee. Processing may take as little as 2–3 business days.
        </div>
      </details>

     
      <details className="collapse bg-base-100 border border-base-300 text-black rounded-lg">
        <summary className="collapse-title font-semibold">
          What payment methods do you accept?
        </summary>
        <div className="collapse-content text-sm text-gray-600">
          We accept credit/debit cards, PayPal, and local bank transfers
          depending on your region.
        </div>
      </details>
    </div>
  );
};

export default FaqSection;
