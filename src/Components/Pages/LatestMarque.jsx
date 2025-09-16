import Marquee from "react-fast-marquee";

const LatestMarque = () => {
    return (
        <div className=" text-white p-2">
      <Marquee speed={60} pauseOnHover={true}>
        <span className="mx-8 font-bold">🎉 Exclusive Offer: Flat 20% Off Visa Processing Fee 🎉</span>
        <span className="mx-8 font-bold">✨ Limited Time Deal: Use Code VISA20 and Save! ✨</span>
        <span className="mx-8 font-bold">✈️ Your Journey Awaits! Get 20% Off Visa Applications. ✈️</span>
      </Marquee>
    </div>
    );
};

export default LatestMarque;