import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import LatestVisas from "../LatestVisas/LatestVisas";

const Home = () => {
  
  return (
    <div className="mt-3">
       <Helmet>
        <title>visaZen | Home</title>
      </Helmet>
      <Banner />
      <LatestVisas  />
    </div>
  );
};

export default Home;