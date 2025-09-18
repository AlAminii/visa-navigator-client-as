import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
const {createUser, setUsers, updateUserProfile} = useContext(AuthContext)
const navigate = useNavigate()
    const handaleRegister = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const pass = form.pass.value;
        console.log(name, email, photo,pass)
        createUser(email,pass)
        .then(res=>{
            console.log(res.user)
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
              navigate("/")

            })
            .catch(err=>{
              console.log(err)
            })
          
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
          <form onSubmit={handaleRegister} className="space-y-3">
         <div className="flex justify-center items-center mt-4">
             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
             
            <label className="label"> Name</label>
            <input name="name"  type="text" className="input input-bordered w-full" placeholder="your name" />

            <label className="label">Image URL:</label>
<input type="url"  className="input input-bordered w-full" name="photo" placeholder="Enter image URL here"></input>
            
            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered w-full" placeholder="email" />

            <label className="label">Password</label>
            <input name="pass" type="password" className="input input-bordered w-full" />

          
            <div className=" mt-4">
              <button type="submit" className="btn btn-outline w-1/2 mr-2">
                Register
              </button>
              
            </div>
          </fieldset>
         </div>
        </form>
    );
};

export default Register;