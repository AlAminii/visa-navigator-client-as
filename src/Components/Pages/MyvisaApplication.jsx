import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplyVisaCard from "./ApplyVisaCard";
import { Helmet } from "react-helmet-async";


const MyvisaApplication = () => {
    const applydata = useLoaderData()
    const [applyVisas, setApplyVisas] = useState(applydata)
    return (
      <>
        <Helmet>
                <title>Visa | My visa application</title>
            </Helmet>
        <div>
          
            <h1 className="text-2xl font-bold p-4 bg-amber-200 text-blue-700 ">See Application Heare</h1>
            
        <div className="grid grid-cols-1 place-items-center  gap-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white p-8">
                {
                applyVisas.map((applyVisa)=><ApplyVisaCard key={applyVisa._id} applyVisas={applyVisas} setApplyVisas={setApplyVisas} applyVisa={applyVisa}></ApplyVisaCard>)
            }
        </div>
        </div></>
    );
};

export default MyvisaApplication;