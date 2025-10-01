import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplyVisaCard from "./ApplyVisaCard";


const MyvisaApplication = () => {
    const applydata = useLoaderData()
    const [applyVisas, setApplyVisas] = useState(applydata)
    return (
        <div>
            <h1 className="text-2xl font-bold p-4 bg-amber-200 text-blue-700 ">See Application Heare</h1>
            
        <div className="grid grid-cols-1 place-items-center  gap-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white p-8">
                {
                applyVisas.map((applyVisa)=><ApplyVisaCard applyVisas={applyVisas} setApplyVisas={setApplyVisas} applyVisa={applyVisa}></ApplyVisaCard>)
            }
        </div>
        </div>
    );
};

export default MyvisaApplication;