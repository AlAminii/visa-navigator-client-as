import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Pages/Footer";

const MainLayot = () => {
    return (
        <div className="border border-green-600 max-w-9xl w-full mx-auto ">
            <Header></Header>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayot;