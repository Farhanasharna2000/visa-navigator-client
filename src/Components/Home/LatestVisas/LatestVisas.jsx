import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
const LatestVisas = () => {
    
    const [latestVisas, setLatestVisas] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/visaDataSort")
        .then((response) => response.json())
        .then((data) => {
          setLatestVisas(data); 
        });
    }, []); 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-semibold mb-8">Latest Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {latestVisas.map((visa) => (
          <div
            key={visa._id}
            className="  rounded-lg shadow-md p-4 bg-white"
          >
            <img
              src={visa.image}
              alt={visa.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="flex justify-between my-4">
            <div className="flex text-black gap-2">
            <p className=" font-bold">{visa.visaType}</p>
<p>|</p>
            <h2 className=" font-bold ">{visa.name}</h2>

            </div>
            <p className="text-green-600 font-bold">Fee: {visa.fee}</p>

            </div>
            <p className="text-gray-700 ">Processing Time : {visa.processingTime}</p>
            <p className="text-gray-700 ">Validity : {visa.validity}</p>
            <p className="text-gray-700 ">Application Method : {visa.method}</p>
            <Link to={`/visa-details/${visa._id}`}>
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/all-visas" className="bg-green-500 text-white py-2 px-6 rounded">
          See all visas
        </Link>
      </div>
    </div>
  );
};
LatestVisas.propTypes = {
   
    visas: PropTypes.object,
}
export default LatestVisas;
