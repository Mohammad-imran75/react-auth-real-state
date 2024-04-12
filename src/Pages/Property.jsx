import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiSquareAlert } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

import { useEffect, useState } from "react";
const Property = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  console.log(item);
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const findData = data.find((property) => property.id == id);
    if (findData) {
      setItem(findData);
      console.log(findData);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>View Details page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {item && (
        <>
          <div className="hero lg:max-w-5xl mx-auto rounded-lg border-2 p-4 shadow-2xl">
            <div className="hero-content flex-col justify-around lg:flex-row">
              <img
                src={item.image}
                className="max-w-sm bg-cover rounded-lg shadow-3xl"
              />
              <div className="p-5">
                <h1 className="text-5xl font-bold text-center">
                  {item.estate_title}
                </h1>
                <p className="text-[20px] mt-4">
                  Description : {item.description}
                </p>
                <div className="flex mt-4 justify-between items-center">
                  <p className="font-semibold">
                    SegMent Name : {item.segment_name}
                  </p>
                  <p className="flex justify-between">
                    Area :
                    <small className="font-bold flex items-center gap-2">
                      <CiSquareAlert className="text-2xl font-bold text-red-400"></CiSquareAlert>{" "}
                      {item.area}
                    </small>
                  </p>
                </div>
                <div className="flex mt-4 justify-between items-center">
                  <p className="font-semibold">Price : {item.price}</p>
                  <p className="flex justify-between">
                    Status :
                    <small className="font-bold flex items-center gap-2">
                      {item.status}
                    </small>
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-green-300 mt-4">
                    Facilities :-
                  </h1>
                  <ul className="font-medium text-gray-500">
                    <li>1. {item.facilities[0]}</li>
                    <li>1. {item.facilities[1]}</li>
                    <li>1. {item.facilities[2]}</li>
                   </ul>
                </div>
                <h1 className="mt-4 text-center flex items-center gap-3 font-semibold">Location : <FaLocationDot className="text-red-500 font-bold text-2xl"></FaLocationDot>{item.location}</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Property;
