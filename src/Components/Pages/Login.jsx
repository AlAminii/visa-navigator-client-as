import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handaleGoogleSignIn, handaleSignIn } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()

  const handaleSignUp = e=>{
    e.preventDefault()
    const form = e.target;
    const email =form.email.value;
    const pass = form.pass.value;
    console.log(email,pass)
    handaleSignIn(email,pass)
    .then(res=>{
        console.log(res.user)
        navigate(location?.state? location.state : "/")
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <div className="flex justify-center items-center gap-6 mt-6">
  
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
            />

            <label className="label">Password</label>
            <input
              name="pass"
              type="password"
              className="input input-bordered w-full"
              placeholder="password"
            />
            <div className="text-left mt-2">
              <NavLink to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </NavLink>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-outline w-full"
              >
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </div>

     
      <div className="h-full w-px bg-gray-300"> <br /></div>
   

      
      <div className="w-1/3 flex flex-col justify-center items-center gap-4">
        <p className="text-gray-500">Or continue with</p>
        <button
          onClick={handaleGoogleSignIn}
          className="btn btn-outline w-full"
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
