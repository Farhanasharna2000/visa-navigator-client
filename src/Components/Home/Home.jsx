import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import LatestVisas from "../LatestVisas/LatestVisas";
import VisaProcess from "../VisaProcess/VisaProcess";

const Home = () => {
  
  return (
    <div className="mt-3">
       <Helmet>
        <title>visaZen | Home</title>
      </Helmet>
      <Banner />
      <LatestVisas  />
      <VisaProcess/>
    </div>
  );
};

export default Home;