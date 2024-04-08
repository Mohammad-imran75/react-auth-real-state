import { useContext, useState } from "react";
import {useLocation, Link,useNavigate} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
const {loginUser} = useContext(AuthContext);
const location = useLocation();
const [showPassword,setShowPassword] = useState(false)
const navigate = useNavigate()
const [error,setError] =useState('')
const handleLogin= e =>{
 e.preventDefault();
 const form = new FormData(e.currentTarget);
 const email = form.get('email');
 const password = form.get('password');
 setError('')
    if(password.length < 6){
    
    setError('Password must be 6 characters or longer');
      return;
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
      setError('Password must have at least one uppercase and one lowercase letter');
    return;
    }
 loginUser(email,password)
 .then(result => {
    console.log(result.user);
    navigate(location?.state? location.state : '/');
 }).catch(error => console.error(error));
}
  return (
    <div className="mt-10">
      <Helmet>
        <title>Web login page</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <h2 className="text-3xl text-center font-serif">Please Login now</h2>
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="relative">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            /> <span
            onClick={() => setShowPassword(!showPassword)}
            className="lg:absolute top-12 right-4"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash
             />}
          </span>
          </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          <h3 className="text-center p-3">
            Do not have any acount please
            <Link className="font-bold text-blue-600" to="/register">
              Register
            </Link>
          </h3>
        </div>
      </div>
      {
          error && <ToastContainer>
            {toast.error(error)}
          </ToastContainer>
        }
      
    </div>
  );
};

export default Login;
