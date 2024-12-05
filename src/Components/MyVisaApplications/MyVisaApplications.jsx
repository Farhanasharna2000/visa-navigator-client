import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
    const { user } = useContext(authContext);
    const [applicationData, setApplicationData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/myVisaApplications", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.email}`,
                    },
                });
                const data = await response.json();

                setApplicationData(data);
            }

            catch (error) {
                console.error("Error fetching visa applications:", error);
            }
        };

        if (user?.email) {
            fetchData();
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/myVisaApplications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const newData = applicationData.filter((application) => id !== application._id);
            setApplicationData(newData);
            if (data.deletedCount === 1) {
              Swal.fire("Successfully deleted one document.");
            } else {
              Swal.fire("No documents matched the query. Deleted 0 documents.");
            }
          })
          .catch((error) => {
            console.error("Error deleting visa application:", error);
            Swal.fire("Failed to delete the document.");
          });
      };
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center mb-8">My Visa Applications</h1>
                { applicationData.length === 0 ?
                            <p className="text-center text-xl text-red-500 py-10">No data found</p> :
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    { (applicationData.map((data) => (
                                <div key={data._id} className="max-w-md bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                                    <div className="flex items-center space-x-4">
                                        <img src={data.countryImg} alt="country" className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <h2 className="text-lg font-bold">{data.country}</h2>
                                            <p className="text-sm text-gray-500">{data.type}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <p><span className="font-semibold">Processing Time:</span> {data.time}</p>
                                        <p><span className="font-semibold">Fee:</span> ${data.fee}</p>
                                        <p><span className="font-semibold">Validity:</span> {data.validity}</p>
                                        <p><span className="font-semibold">Application Method:</span> {data.method}</p>
                                        <p><span className="font-semibold">Applied Date:</span> {data.appliedDate}</p>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <p><span className="font-semibold">Applicant:</span> {data.firstName}  {data.lastName}</p>
                                        <p><span className="font-semibold">Email:</span> {data.email}</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                        onClick={()=>handleDelete(data._id)}
                                            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )))}
                </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default MyVisaApplications;
