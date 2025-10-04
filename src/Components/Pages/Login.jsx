import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { handaleGoogleSignIn, handaleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

 
  const handleGoogle = () => {
    handaleGoogleSignIn()
      .then((res) => {
        console.log(res.user, "google user login v");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };


  const handaleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const pass = form.pass.value.trim();

    
    if (!email || !pass) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both email and password!",
      });
    }

    if (pass.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
      });
    }

    handaleSignIn(email, pass)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center gap-6 mt-6 px-8 py-6">
  
      <div className="w-2/3">
        <form onSubmit={handaleSignUp} className="space-y-3">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="email"
              required
            />

            <label className="label">Password</label>
            <input
              name="pass"
              type="password"
              className="input input-bordered w-full"
              placeholder="password"
              required
            />
            <div className="text-left mt-2">
              <NavLink
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </NavLink>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-outline w-full">
                Login
              </button>
            </div>

            
          <p className="text-center mt-4 text-sm">
            you have no account?{" "}
            <NavLink to="/register" className="text-blue-600 hover:underline">
              Register
            </NavLink>
          </p>
          </fieldset>
        </form>
      </div>


      <div className="h-full w-px bg-gray-300">
        <br />
      </div>

   
    <div className="flex-1 flex flex-col justify-center items-center border p-6 rounded-xl shadow-sm bg-base-100">
          <h2 className="text-xl font-semibold mb-4">Or Continue With</h2>
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Google Login
          </button>
        </div>
    </div>
  );
};

export default Login;
