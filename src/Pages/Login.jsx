import { useContext, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { loginUser,googleLogin,gitHubLogin,setUser} = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    
    if (password.length < 6) {
      toast.error("Password must be 6 characters or longer");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      toast.error(
        "Password must have at least one uppercase and one lowercase letter"
      );
      return;
    }
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        
        navigate(location?.state ? location.state : "/");
        toast.success("Login successfull");
      })
      .catch((error) => toast.error(error.message));
  };
   const handleGoogleLogin = () =>{
    googleLogin()
    .then(result=>setUser(result))
    .then(error=>toast.error(error.message));
   }
   const handleGitHubLogin = () =>{
    gitHubLogin()
    .then(result => setUser(result))
    .catch(error=> toast.error(error.message))
   }
  return (
    <div className="mt-10">
      <Helmet>
        <title>Web login page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2 className="text-3xl text-center font-serif">Please Login now</h2>
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow-3xl bg-base-100">
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />{" "}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="lg:absolute top-12 right-4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
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
            Do not have Any account Please
            <Link className="font-bold text-blue-600 ml-3" to="/register">
              Register
            </Link>
          </h3>
        </div>

        <div className="flex justify-center gap-4 text-3xl mt-4 border-t-2 p-3">
          <FcGoogle onClick={handleGoogleLogin}></FcGoogle>
          <FaGithubSquare onClick={handleGitHubLogin}></FaGithubSquare>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
