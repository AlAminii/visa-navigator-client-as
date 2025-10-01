import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUsers, updateUserProfile, handaleGoogleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogle = () => {
    handaleGoogleSignIn()
      .then((res) => {
        console.log(res.user, "google user login v");
        Swal.fire("Success", "Google login successful!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };

  const handaleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const pass = form.pass.value;

  
    if (pass.length < 6) {
      return Swal.fire(
        "Error",
        "Password must be at least 6 characters long",
        "error"
      );
    }
    if (!/[A-Z]/.test(pass)) {
      return Swal.fire(
        "Error",
        "Password must contain at least one uppercase letter",
        "error"
      );
    }
    if (!/[a-z]/.test(pass)) {
      return Swal.fire(
        "Error",
        "Password must contain at least one lowercase letter",
        "error"
      );
    }

    createUser(email, pass)
      .then((res) => {
        const loggedUser = res.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUsers({
              ...loggedUser,
              displayName: name,
              photoURL: photo,
            });
            Swal.fire("Success", "Registration successful!", "success");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Error", err.message, "error");
          });
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 ">
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-2xl shadow-lg w-[90%] lg:w-3/4">
        <form
          onSubmit={handaleRegister}
          className="flex-1 space-y-3 border p-6 rounded-xl shadow-sm bg-base-100"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="Your name"
          />

          <label className="label">Image URL</label>
          <input
            type="url"
            className="input input-bordered w-full"
            name="photo"
            placeholder="Enter image URL"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="pass"
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
          />

          <button type="submit" className="btn btn-outline w-full mt-4">
            Register
          </button>

        
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Login
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

export default Register;
