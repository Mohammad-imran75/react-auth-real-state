import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userRegister } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const photo = form.get("photo");
    const name = form.get("name");
    const password = form.get("password");
    console.log(email, photo, name, password);
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
    userRegister(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/login");
        toast.success("Registrantion Successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mt-10">
      <Helmet>
        <title>Web Register page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2 data-aos="fade-left" data-aos-duration="2000" className="text-3xl text-center font-serif text-red-400">Please register now</h2>
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-base-100 " data-aos="fade-right" data-aos-delay="2000">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
              />
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
            <button className="btn btn-secondary">Register</button>
          </div>
        </form>
        <div>
          <h3 className="text-center p-3">
            Already Have an account
            <Link className="font-bold ml-2 text-blue-600" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
