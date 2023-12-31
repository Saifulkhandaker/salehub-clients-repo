import 'sweetalert2/src/sweetalert2.scss'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {

    const {googleSignIn,signIn} = useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const navigate = useNavigate()


    const handleGoogle = () => {
      googleSignIn()
      .then(result => {
        Swal.fire({
          title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
          setTimeout(() => {
            navigate('/');
          }, 3000);
      })
    }

    const handleLogin = (e) => {
      e.preventDefault();
      if((email, password)){
        signIn(email, password)
        .then(result => {
          setError('');
          Swal.fire({
            title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
            setTimeout(() => {
              navigate(location?.state ? location.state : '/');
            }, 3000);
        })
        .catch((err) => {
          setError('Invalid email or password');
          Swal.fire({
            title: 'Error!',text: 'Invalid email or password',icon: 'error',confirmButtonText: 'Error' });

        })
      }
    }

    return (
        <div>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                onChange={(e) => setEmail(e.target.value)}
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
                 onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white text-black font-medium border border-gray-600">Login</button>
              </div>
              <p>Or Login With Google</p>
              <button onClick={handleGoogle} className="btn bg-white text-black font-medium border border-gray-600">Login with Google</button>
              <p>Don't have an account!!! Please <Link className="font-medium underline text-red-600" to="/register">Register</Link></p>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;