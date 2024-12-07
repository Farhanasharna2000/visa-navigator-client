import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AllVisas = () => {
  const visas = useLoaderData();
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(visas);

  const handleSelect = (e) => {
    const visaType = e.target.value;

    setSelectedVisaType(visaType);

    if (visaType) {
      fetch(`https://visa-navigator-server-liart.vercel.app/selectedVisa?visaType=${visaType}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSelectedVisa(data);
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
        });
    } else {
      setSelectedVisa(visas);
    }
  };

  return (
    <div>
      <Helmet>
        <title>VisaZen | All Visas</title>
      </Helmet>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>
        <select
          onChange={handleSelect}
          value={selectedVisaType}
          className="select select-bordered w-full max-w-xs mb-8"
        >
          <option selected>
            Select visa type
          </option>
          <option>Business visa</option>
          <option>Residence visa</option>
          <option>Student visa</option>
          <option>Tourist visa</option>
        </select>
        { selectedVisa.length === 0 ?
                            <p className="text-center text-xl text-red-500 py-10">No data found</p> :
        (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedVisa.map((visa) => (
            <div
              key={visa._id}
              className="border border-gray-200 rounded-lg shadow-md p-4 bg-white flex flex-col"
            >
              <div className="flex-grow">
                <img
                  src={visa.image}
                  alt={visa.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-4">{visa.name}</h2>
                <p className="text-gray-500 text-sm">Type : {visa.visaType}</p>
                <p className="text-gray-500 text-sm">
                  Processing Time : {visa.processingTime}
                </p>
                <p className="text-gray-700 mt-2">Validity : {visa.validity}</p>
                <p className="text-gray-700 mt-2">Application Method : {visa.method}</p>
                <p className="text-green-600 font-bold mt-2">Fee: {visa.fee}</p>
              </div>

              <Link to={`/visa-details/${visa._id}`} className="block">
                <div>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    See Details
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>)}
      </div>
      <Footer />
    </div>
  );
};

export default AllVisas;