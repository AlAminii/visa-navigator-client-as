import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Visa | Error</title>
            </Helmet>
            <p className="text-5xl font-bold text-center mt-8; ">
                404 This page not found
            </p>
            <div className="text-center">
                <Link to={"/"} className="btn btn-wide btn-warning mb-4">Go Back to Home Page</Link>
            </div>
        </div>
    );
};

export default Error;