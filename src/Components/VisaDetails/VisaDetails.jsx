import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

const VisaDetails = () => {
    const { id } = useParams();
    
    const [visaDetails, setVisaDetails] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3000/visaData/${id}`)
        .then((res) => res.json())
        .then((data) => setVisaDetails(data))
    }, [id]);
  
    if (!visaDetails) return <p>Loading...</p>;
  
    return (
        <div>
            <Navbar/>
            <div className="w-4/12 mx-auto p-6 gap-6">
  <div className="bg-gradient-to-r from-blue-100 to-indigo-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
    <img
      src={visaDetails.image}
      alt={`${visaDetails.name} flag`}
      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105"
    />
    <h2 className="text-3xl font-extrabold mb-4 text-indigo-800">
      {visaDetails.visaType}
    </h2>
    <p className="text-gray-700 mb-2">
      <strong>Country Name:</strong> {visaDetails.name}
    </p>
    <p className="text-gray-700 mb-2">
      <strong>Processing Time:</strong> {visaDetails.processingTime}
    </p>
    <p className="text-gray-700 mb-2">
      <strong>Fee:</strong> ${visaDetails.fee}
    </p>
    <p className="text-gray-700 mb-2">
      <strong>Validity:</strong> {visaDetails.validity}
    </p>
    <p className="text-gray-700 mb-2">
      <strong>Application Method:</strong> {visaDetails.method}
    </p>
    <p className="text-gray-700 mb-4">
      <strong>Description:</strong> {visaDetails.description}
    </p>
    <p className="text-gray-700 mb-4">
      <strong>Age:</strong> {visaDetails.age} years
    </p>
    <div className="mt-4">
      <strong className="text-indigo-800">Required Documents:</strong>
      <ul className="list-disc pl-5 space-y-2">
        {visaDetails.requiredDocuments.map((doc, index) => (
          <li key={index} className="text-gray-600">
            {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

         <Footer/> 
        </div>
    );
};

export default VisaDetails;