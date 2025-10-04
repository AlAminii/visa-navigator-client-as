import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaDetailsCard from "./VisaDetailsCard";


const VisaDetails = () => {
    const visa= useLoaderData()
   
//    console.log(visa)
    
    return (
        <div>
        {
           <VisaDetailsCard visa={visa} ></VisaDetailsCard>
        }
        </div>
    );
};

export default VisaDetails;