import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AllVisas = () => {
    const visas = useLoaderData()
    
    return (
        <div>
            <Navbar/>
            <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="border border-gray-200 rounded-lg shadow-md p-4 bg-white"
          >
            <img
              src={visa.image}
              alt={visa.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{visa.name}</h2>
            <p className="text-gray-500 text-sm">Type: {visa.visaType}</p>
            <p className="text-gray-500 text-sm">Processing Time: {visa.processingTime}</p>
            <p className="text-gray-700 mt-2">{visa.description}</p>
            <p className="text-green-600 font-bold mt-2">Fee: {visa.fee}</p>
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
    </div>
            <Footer/>
        </div>
    );
};

export default AllVisas;