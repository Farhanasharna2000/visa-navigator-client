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
      fetch(`http://localhost:3000/selectedVisa?visaType=${visaType}`, {
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
        <title>visaZen | All Visas</title>
      </Helmet>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 ">Find the Perfect Visa for You</h1>
        <select
          onChange={handleSelect}
          value={selectedVisaType}
          className="select select-bordered bg-[#111A3A] text-white max-w-sm mb-8"
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
        (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {selectedVisa.map((visa) => (
            <div
              key={visa._id}
              className="border border-gray-200 rounded-lg  p-4 bg-slate-100 flex flex-col shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <img
                  src={visa.image}
                  alt={visa.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-bold my-3">{visa.name}</h2>
                <div className="space-y-1">
                <p ><span className="font-semibold">Type :</span> {visa.visaType}</p>
                <p ><span className="font-semibold">Processing Time : </span>
                 {visa.processingTime}
                </p>
                <p ><span className="font-semibold">Validity :</span> {visa.validity}</p>
                <p ><span className="font-semibold">Application Method :</span> {visa.method}</p>
                <p className="text-[#ff0000e1] font-bold ">Fee: {visa.fee}</p>
                </div>
              </div>

              <Link to={`/visa-details/${visa._id}`} className="block">
                <div>
                  <button className="mt-4 font-bold w-full bg-[#111A3A] hover:bg-white hover:text-[#111A3A] text-white py-2 px-4 rounded ">
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