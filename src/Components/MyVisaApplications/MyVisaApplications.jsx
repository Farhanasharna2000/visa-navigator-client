import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyVisaApplications = () => {
  const { user } = useContext(authContext);
  const [applicationData, setApplicationData] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!user?.email) {
          setLoading(false);
          return;
        }
        const response = await fetch("https://visa-navigator-server-liart.vercel.app/myVisaApplications", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.email}`,
          },
        });
        const data = await response.json();

        setApplicationData(data);
        setLoading(false);

      }

      catch (error) {
        console.error("Error fetching visa applications:", error);
        setLoading(false);

      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://visa-navigator-server-liart.vercel.app/myVisaApplications/${id}`, {
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
  const handleSearch = () => {
    fetch(`https://visa-navigator-server-liart.vercel.app/myVisaApplications?searchParams=${encodeURIComponent(search)}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.email}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApplicationData(data);
      })
      .catch((error) => {
        console.error("Error during search:", error);
      });
  }


  return (
    <div>
      <Helmet>
        <title>VisaZen | My Visa Applications</title>
      </Helmet>
      <Navbar />
      <div className="p-8 container mx-auto">
        <h1 className="text-3xl font-bold text-center ">My Visa Applications</h1>
        <div className="flex gap-2 lg:w-[400px] mx-auto my-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="search"
            className="input input-bordered w-full"
            required
          />
          <button
            onClick={() => handleSearch(search)}
            className="btn bg-[#111A3A] hover:bg-slate-300 hover:text-[#111A3A] text-white"
          >Search</button>
        </div>
        {loading ? (
          <span className="loading loading-bars loading-lg mx-auto block py-40 "></span>
        ) : applicationData.length < 1 ? (
          <p className="text-center text-xl text-red-500 py-10">No data found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 ">
            {(applicationData.map((data) => (
              <div key={data._id} className="flex flex-col max-w-md bg-slate-100 shadow-lg rounded-lg p-4 border border-gray-200">

                <div className="flex-grow">
                  <div className="relative">
                    <div className="">
                      <img src={data.countryImg} alt="country" className="w-full h-52 rounded-lg " />

                    </div>
                    <div className="absolute top-[5%] right-[5%] bg-white p-2  font-bold">
                      <p className="text-sm text-[#ff0000e1]">{data.type}</p>

                    </div>
                    <div className="absolute  bg-white font-bold py-3 left-5 right-5 bottom-[-45px] flex -translate-y-1/2 transform px-10 ">
                      <p className="mx-auto hover:text-[#ff0000e1]"><span className="font-semibold ">Applied Date : </span> {data.appliedDate}</p>

                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-12">{data.country}</h2>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p><span className="font-semibold">Processing Time:</span> {data.time}</p>
                    <p><span className="font-semibold">Validity -</span> {data.validity}</p>
                    <p><span className="font-semibold">Fee:</span> ${data.fee}</p>
                    <p><span className="font-semibold">Application Method:</span> {data.method}</p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p><span className="font-semibold">Applicant:</span> {data.firstName}  {data.lastName}</p>
                    <p><span className="font-semibold">Email:</span> {data.email}</p>
                  </div>

                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="w-full bg-[#c00]  text-white py-2 px-4 font-bold rounded-lg "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyVisaApplications;
