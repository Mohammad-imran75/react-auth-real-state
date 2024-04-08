import { useContext } from "react";
import {useLocation, Link,useNavigate} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
const {loginUser} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate()
// console.log(location)
const handleLogin= e =>{
 e.preventDefault();
 const form = new FormData(e.currentTarget);
 const email = form.get('email');
 const password = form.get('password');
 loginUser(email,password)
 .then(result => {
    console.log(result.user);
    navigate(location?.state? location.state : '/');
 }).catch(error => console.error(error));
}
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center font-serif">Please register now</h2>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
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
    </div>
  );
};

export default Login;
