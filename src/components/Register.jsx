import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";

const Register = () => {

  const {signUp, handleUpdateProfile} = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate()



  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const img = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");


    if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{6,})[a-zA-Z0-9@#$%^&+=!]*$/.test(password)){
      setError(
        "Password must be at least eight characters long and contain at least one uppercase letter and one special character."
      )
      Swal.fire({
        title: 'error!',text: 'Password must be at least 6 characters long and contain at least one uppercase letter and one special character',icon: 'error',confirmButtonText: 'Cool' });
     }
     else{
      setError('');
      if(email) {
        signUp(email, password)
        .then(result => {
          handleUpdateProfile(name, img)
          .then(() => {
            Swal.fire({
              title: 'Success!',text: 'Successfully registered',icon: 'success',confirmButtonText: 'Error' });
              setTimeout(() => {
                navigate('/');
              }, 3000);
          })
        })
      }
     }
  
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn bg-white text-black font-medium border border-gray-600">
                  Register
                </button>
              </div>
              <p>
                Already have an account!!! Please{" "}
                <Link
                  className="font-medium underline text-[#3cfe01]"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
