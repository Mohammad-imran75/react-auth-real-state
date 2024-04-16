import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Resturant = ({ resturant }) => {
  const { estate_title, image, area, location, price, status, id } = resturant;
  // console.log(resturant);
  return (
    <div  className="card p-4 bg-purple-200 shadow-xl">
      <h1 className="text-3xl mt-2 font-bold text-center">{estate_title}</h1>
      <figure className="px-10 pt-10">
        <img data-aos="zoom-in" data-aos-duration="2000" src={image} alt="Shoes" className="rounded-xl w-[300px]" />
      </figure>
      <div className="card-body ">
        <h2 data-aos="fade-left" data-aos-delay="1000" className="text-xl font-semibold">Status : {status}</h2>
        <div data-aos="fade-left" data-aos-delay="1200" className="flex justify-between gap-4 font-semibold">
          <p>Price : {price}</p>
          <p>Area : {area}</p>
        </div>
        <h1 data-aos="fade-left" data-aos-delay="1400" className="font-semibold">Location : {location}</h1>
        <h1 data-aos="fade-left" data-aos-delay="1600" className="text-xl font-medium">Location : {location}</h1>
        <div data-aos="fade-left" data-aos-delay="1800" className="card-actions ">
          <Link to={`/resturant/${id}`}>
            <button className="btn btn-primary">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Resturant.propTypes = {
  resturant: PropTypes.object,
};
export default Resturant;
