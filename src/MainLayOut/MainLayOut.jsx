import { Outlet } from "react-router-dom";

import { Helmet } from "react-helmet";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayOut = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  })
  return (

    <div className="font-poppins ">
      <Helmet>
        <title>Lingo Bingo</title>
      </Helmet>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />

      </div>

      <Footer />
    </div>
  );
};

export default MainLayOut;