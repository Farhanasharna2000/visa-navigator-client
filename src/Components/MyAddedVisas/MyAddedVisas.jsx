import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { authContext } from "../AuthProvider/AuthProvider";
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Helmet } from "react-helmet";

const MyAddedVisas = () => {
    const { user } = useContext(authContext);
    const [myAddedVisas, setMyAddedVisas] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visaToUpdate, setVisaToUpdate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user?.email) {
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://visa-navigator-server-liart.vercel.app/myAddedVisas", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.email}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.message);
                    setLoading(false);
                    return;
                }

                const data = await response.json();

                setMyAddedVisas(data);
                setLoading(false);

            } catch (error) {
                setError("An error occurred while fetching data", error);
                setLoading(false);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`https://visa-navigator-server-liart.vercel.app/myAddedVisas/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                const newData = myAddedVisas.filter((visa) => id !== visa._id);
                setMyAddedVisas(newData);
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

    const openUpdateModal = (visa) => {
        setVisaToUpdate(visa);
        setIsModalOpen(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        if (!visaToUpdate?._id) {
            console.error("Visa ID is missing");
            return;
        }

        const updatedVisa = {
            ...visaToUpdate,
            name: e.target.name.value,
            visaType: e.target.visaType.value,
            processingTime: e.target.processingTime.value,
            fee: e.target.fee.value,
            validity: e.target.validity.value,
            method: e.target.method.value,
            image: e.target.image.value,
        };

        try {
            const response = await fetch(`https://visa-navigator-server-liart.vercel.app/update/${visaToUpdate._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedVisa),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire("Visa data updated successfully.");

                setMyAddedVisas(prevState =>
                    prevState.map(visa =>
                        visa._id === visaToUpdate._id ? { ...visa, ...updatedVisa } : visa
                    )
                );

                setIsModalOpen(false);
            } else {
                console.error("Error updating visa:", data);
                Swal.fire(data.message || "Failed to update visa.");
            }
        } catch (error) {
            Swal.fire("Error updating visa:", error);
        }
    };
    return (
        <div>
            <Helmet>
                <title>VisaZen | My Added Visas</title>
            </Helmet>
            <Navbar />
            <Tooltip id="my-tooltip" />
            <div className="p-8 container mx-auto ">
                <h1 className="text-3xl font-bold text-center mb-8">My Added Visa</h1>

                {loading ? (
                    <span className="loading loading-bars loading-lg mx-auto block py-40 "></span>
                ) : error ? (
                    <p className="text-center text-xl text-red-500 py-10">{error}</p>
                ) : myAddedVisas.length < 1 ? (
                    <p className="text-center text-xl text-red-500 py-10">No data found</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {myAddedVisas.map((data) => (
                            <div key={data._id} className="max-w-md bg-slate-100 shadow-lg rounded-lg p-5 border border-gray-200">
                                <div >
                                    <div className="flex items-center space-x-4">
                                        <img src={data.image} alt="country" className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <h2 className="text-lg font-bold">{data.name}</h2>
                                            <p className="text-sm text-gray-500">{data.visaType}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <p><span className="font-semibold">Processing Time:</span> {data.processingTime}</p>
                                        <p><span className="font-semibold">Fee:</span> ${data.fee}</p>
                                        <p><span className="font-semibold">Validity:</span> {data.validity}</p>
                                        <p><span className="font-semibold">Application Method:</span> {data.method}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4 gap-3">
                                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Edit" className="btn hover:bg-black bg-green-700 text-white text-xl" onClick={() => openUpdateModal(data)}>
                                        <MdOutlineModeEditOutline />
                                    </button>
                                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Delete" onClick={() => handleDelete(data._id)} className="btn text-xl bg-red-600 hover:bg-black text-white">
                                        <MdDeleteForever />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {isModalOpen && visaToUpdate && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-4">Update Visa Information</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="block mb-2">
                                    Country Name:
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={visaToUpdate.name}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Visa Type:
                                    <input
                                        type="text"
                                        name="visaType"
                                        defaultValue={visaToUpdate.visaType}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Processing Time:
                                    <input
                                        type="text"
                                        name="processingTime"
                                        defaultValue={visaToUpdate.processingTime}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Fee:
                                    <input
                                        type="number"
                                        name="fee"
                                        defaultValue={visaToUpdate.fee}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Validity:
                                    <input
                                        type="text"
                                        name="validity"
                                        defaultValue={visaToUpdate.validity}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Application Method:
                                    <input
                                        type="text"
                                        name="method"
                                        defaultValue={visaToUpdate.method}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>
                                <label className="block mb-4">
                                    Country Image URL:
                                    <input
                                        type="text"
                                        name="image"
                                        defaultValue={visaToUpdate.image}
                                        className="w-full p-2 border rounded"
                                    />
                                </label>

                            </div>

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button

                                    type="submit"
                                    className=" hover:bg-black bg-green-700 text-white px-4 py-2 rounded">
                                    Update Visa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyAddedVisas;
