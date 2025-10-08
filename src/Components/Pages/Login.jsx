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
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
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
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-2xl shadow-lg w-[90%] lg:w-3/4">
        
     
        <form
          onSubmit={handaleSignUp}
          className="flex-1 space-y-3 border p-6 rounded-xl shadow-sm bg-base-100"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            name="pass"
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
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

          <button type="submit" className="btn btn-outline w-full mt-4">
            Login
          </button>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-blue-600 hover:underline">
              Register
            </NavLink>
          </p>
        </form>

      
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
    </div>
  );
};

export default Login;