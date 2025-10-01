import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
    
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Your Visa Journey, Simplified
            </h2>
            <p className="mt-2 text-sm md:text-lg">
              Check requirements, apply online, and track your applications with
              ease.
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Find Your Perfect Visa
            </h2>
            <p className="mt-2 text-sm md:text-lg">
              Explore a variety of visa types for students, tourists, and
              professionals.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

     
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Track Your Application, Securely
            </h2>
            <p className="mt-2 text-sm md:text-lg">
              Get real-time updates on your visa status, from anywhere.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
