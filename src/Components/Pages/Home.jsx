import { useLoaderData } from "react-router-dom";
import Allvisa from "./Allvisa";
import AllvisaCard from "./AllvisaCard";
import Banner from "./Banner";
import Hero from "./Hero";
import LatestMarque from "./LatestMarque";
import LatestVisa from "./LatestVisa";

const Home = () => {
  const visas = useLoaderData()
  console.log(visas)
  return (
    <div className="border bg-gradient-to-r from-indigo-500 to-teal-400 text-white ">
     <div className="p-6">
       <Banner></Banner>
     </div>
      <div className="mt-8 bg-[#120f65] ">
        <LatestMarque></LatestMarque>
        <LatestVisa></LatestVisa>
    
        
      </div>
        <div className="p-8">
         <Hero visas={visas}></Hero>
      </div>
        
    </div>
  );
};

export default Home;
