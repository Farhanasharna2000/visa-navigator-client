import { useContext } from "react";
import Banner from "../Banner/Banner";
import { authContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(authContext);
  return (
    <div className="mt-3">
      {user?.displayName && location.pathname === "/" && (
        <div className="py-2 text-center text-blue-500 text-lg font-semibold">
          Welcome, {user.displayName}!
        </div>
      )}

      <Banner />
      
    </div>
  );
};

export default Home;