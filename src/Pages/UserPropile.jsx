import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const UserPropile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>User Propile</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="card w-96 glass mx-auto border-orange-300 border-2">
        <figure>
          <img
          className="p-4 rounded-xl"
            src={user.photoURL}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <h1>ProviderId : {user.providerId}</h1>
          <p className="text-green-400 font-bold">Uid : {user.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPropile;
