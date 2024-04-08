import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
    const {userRegister} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const photo = form.get("text");
    const name = form.get("name");
    const password = form.get("password");
    console.log(email, photo, name, password);
    userRegister(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-10">
      
      <h2 className="text-3xl text-center font-serif">Please register now</h2>
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-base-100">
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
            <button className="btn btn-secondary">Register</button>
          </div>
        </form>
        <div>
          <h3 className="text-center p-3">
            you have already an account please
            <Link className="font-bold text-blue-600" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
