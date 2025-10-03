import { useLoaderData } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import Banner from "./Banner";
import Hero from "./Hero";
import LatestMarque from "./LatestMarque";
import LatestVisa from "./LatestVisa";

const Home = () => {
  const visas = useLoaderData();
  
  return (
    <div 
      style={{
        background: "linear-gradient(135deg, #080f28 0%, #0a1239 50%, #1a1f3a 100%)",
      }}
    >
    
      <Fade triggerOnce>
        <div className="p-6">
          <Banner />
        </div>
      </Fade>

     
      <Slide direction="up" triggerOnce>
        <div className="mt-8 bg-slate-900/50 backdrop-blur-sm">
          <LatestMarque />
          <LatestVisa />
        </div>
      </Slide>

   
      <div className="p-8">
        <Hero visas={visas} />
      </div>
    </div>
  );
};

export default Home;