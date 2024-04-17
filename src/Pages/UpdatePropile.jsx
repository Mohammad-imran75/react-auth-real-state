import {Helmet} from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UpdatePropile = () => {
    const {updateUser,setUser} = useContext(AuthContext);
    //
    const handleUpdateUser = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        updateUser(name,photo)
        .then(result =>setUser({
          userName:name,
          photoURL:photo,
          result
        }))
        .then(error =>console.log(error));
    }
    return (
        <div><Helmet>
        <title>Update propile</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div data-aos="zoom-in"  data-aos-duration="2000" className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-base-100">
    <form onSubmit={handleUpdateUser} className="card-body">
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
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Update User</button>
          </div>
        </form>
    </div>
        </div>
    );
};

export default UpdatePropile;