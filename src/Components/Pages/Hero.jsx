import { Slide, Fade, Zoom } from "react-awesome-reveal";
import ClientFeedback from "../ExtraComponents/ClientFeedback";
import FaqSection from "../ExtraComponents/FaqSection";
import AllvisaCard from "./AllvisaCard";
import { Link } from "react-router-dom";

const Hero = ({ visas }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #080f28 0%, #0a1239 50%, #1a1f3a 100%)",
      }}
      className="py-10 px-4"
    >
      <div className="container mx-auto">
        
    
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
              Latest Visa Options
            </h2>
            <p className="text-slate-400">Explore our newest opportunities</p>
          </div>
        </Fade>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visas.map((visa, index) => (
            <Slide 
              key={visa._id} 
              direction="up" 
              delay={index * 100} 
              triggerOnce
            >
              <AllvisaCard visa={visa} />
            </Slide>
          ))}
        </div>

      
        <Zoom delay={300} triggerOnce>
          <div className="text-center mt-10">
            <Link to="/allvisa">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                See All Visas
              </button>
            </Link>
          </div>
        </Zoom>

   
        <Fade direction="up" delay={200} triggerOnce>
          <div className="mt-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
            <ClientFeedback />
          </div>
        </Fade>

     
        <Slide direction="up" delay={300} triggerOnce>
          <div className="mt-16">
            <FaqSection />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;