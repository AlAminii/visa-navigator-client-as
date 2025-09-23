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
    <div className="border border-red-500">
      <Banner></Banner>
      <div className="mt-8 bg-[#120f65] p-4">
        <LatestMarque></LatestMarque>
        <LatestVisa></LatestVisa>
    
        
      </div>
        <div>
         <Hero visas={visas}></Hero>
      </div>
        
    </div>
  );
};

export default Home;
