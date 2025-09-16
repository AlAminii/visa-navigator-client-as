import Banner from "./Banner";
import LatestMarque from "./LatestMarque";
import LatestVisa from "./LatestVisa";

const Home = () => {
  return (
    <div className="border border-red-500">
      <Banner></Banner>
      <div className="mt-8 bg-[#120f65] p-4">
        <LatestMarque></LatestMarque>
        <LatestVisa></LatestVisa>
       
      </div>
    </div>
  );
};

export default Home;
