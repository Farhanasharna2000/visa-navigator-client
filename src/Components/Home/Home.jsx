import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import LatestVisas from "../LatestVisas/LatestVisas";
import VisaProcess from "../VisaProcess/VisaProcess";
import Team from "../Team/Team";
import Category from "../Category/Category";

const Home = () => {
  
  return (
    <div className="mt-3">
       <Helmet>
        <title>visaZen | Home</title>
      </Helmet>
      <Banner />
      <LatestVisas  />
      <VisaProcess/>
      <Team/>
      <Category/>
    </div>
  );
};

export default Home;