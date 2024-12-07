import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const VisaDetails = () => {
    const { id } = useParams();
    const { user } = useContext(authContext);

    const [visaDetails, setVisaDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        countryImg: "",
        country:"",
        type:"",
        time:"",
        validity:"",
        method:"",
        appliedDate: new Date().toISOString().split('T')[0],
        fee: 0,
    });

    useEffect(() => {
        fetch(`https://visa-navigator-server-liart.vercel.app/visaData/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setVisaDetails(data);
                setFormData(prevData => ({ ...prevData,
                     fee: data.fee ,
                     countryImg:data.image,
                     country:data.name,
                     type:data.visaType,
                     time:data.processingTime,
                     validity:data.validity,
                     method:data.method,


                     }));
            });
    }, [id]);

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                email: user.email
            }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        fetch("https://visa-navigator-server-liart.vercel.app/visaApplications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((data) => {
            Swal.fire({
                title: "Application Submitted!",
                text: "Your visa application has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
                backdrop: `rgba(0, 0, 0, 0.4)`
            });
            console.log("Visa application submitted:", data);
            setIsModalOpen(false);
            formData.reset();
        });
    };

    if (!visaDetails) return <span className="loading loading-bars loading-lg mx-auto block py-40"></span>;

    return (
        <div>
            <Navbar />
            <div className=" container mx-auto">
                <div>
                <img
                        src={visaDetails.image}
                        alt={`${visaDetails.name} flag`}
                        className="w-[50%] h-96 rounded-lg my-6 "
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
                    <button
                        className="mt-4 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Apply for the Visa
                    </button>
            </div>
                </div>
                    

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg md:w-5/12 transform transition-transform duration-500 scale-95 hover:scale-100">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold mb-4">Visa Application Form</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-600 hover:text-red-500"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 ">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="appliedDate" className="block text-gray-700">Applied Date</label>
                                    <input
                                        type="date"
                                        id="appliedDate"
                                        name="appliedDate"
                                        value={formData.appliedDate}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="fee" className="block text-gray-700">Visa Fee</label>
                                    <input
                                        type="number"
                                        id="fee"
                                        name="fee"
                                        value={formData.fee}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full  hover:bg-black bg-green-700 text-white p-2 rounded-lg "
                            >
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default VisaDetails;
