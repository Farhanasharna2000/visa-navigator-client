import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
const LatestVisas = () => {

  const [latestVisas, setLatestVisas] = useState([]);

  useEffect(() => {
    fetch("https://visa-navigator-server-liart.vercel.app/visaDataSort")
      .then((response) => response.json())
      .then((data) => {
        setLatestVisas(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-xl mb-8">
      <h2 className="text-center text-3xl font-semibold mb-8">Explore Our Latest Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {latestVisas.map((visa) => (
          <div
            key={visa._id}
            className="flex flex-col rounded-lg shadow-md p-6 bg-white"
          >
       <div className="flex-grow">
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
              <p className="text-[#ff0000e1] font-bold">Fee: {visa.fee}</p>

            </div>
            <p ><span className="font-semibold">Processing Time : </span> {visa.processingTime}</p>
            <p ><span className="font-semibold">Validity : </span>{visa.validity}</p>
            <p ><span className="font-semibold">Application Method : </span>{visa.method}</p>
       </div>
           <div>
           <Link to={`/visa-details/${visa._id}`}>
              <button
                className="mt-4 w-full bg-[#111A3A] hover:bg-slate-300 hover:text-[#111A3A] text-white font-bold py-2 px-4 rounded "
              >
                See Details
              </button>
            </Link>
           </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 mb-4">
        <Link to="/all-visas" className="bg-[#ff0000e1] hover:bg-white hover:text-[#ff0000e1] font-bold text-white py-3  px-6 rounded">
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
