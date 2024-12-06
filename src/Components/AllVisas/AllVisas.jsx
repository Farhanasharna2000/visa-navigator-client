import  { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

const AllVisas = () => {
  const visas = useLoaderData();
  const [filteredVisas, setFilteredVisas] = useState(visas);
  const [visaTypes, setVisaTypes] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState("All");

  useEffect(() => {
    const types = [...new Set(visas.map((visa) => visa.visaType))];
    setVisaTypes(types);
  }, [visas]);

  const handleFilterChange = (e) => {
    const selectedType = e.target.value;
    setSelectedVisaType(selectedType);

    if (selectedType === "All") {
      setFilteredVisas(visas);
    } else {
      const filtered = visas.filter((visa) => visa.visaType === selectedType);
      setFilteredVisas(filtered);
    }
  };

  return (
    <div>
      <Helmet>
        <title>visaZen | All Visas</title>
      </Helmet>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>

        <div className="mb-8">
          <label htmlFor="visa-type" className="text-lg font-medium text-gray-700 mr-4">
            Filter by Visa Type:
          </label>
          <select
            id="visa-type"
            value={selectedVisaType}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All</option>
            {visaTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => (
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
                <p className="text-gray-500 text-sm">Type: {visa.visaType}</p>
                <p className="text-gray-500 text-sm">
                  Processing Time: {visa.processingTime}
                </p>
                <p className="text-gray-700 mt-2">Validity: {visa.validity}</p>
                <p className="text-gray-700 mt-2">Application Method: {visa.method}</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllVisas;
