// HomePage.js
import React from "react";
import Banner from "./Components/Banner"; // Adjust path if necessary
// import Cards from "./Components/Card"; // Adjust path if necessary
import Exp from "./Files/Exp";
// import About from "./Files/About";
import Our_team from "./Components/Our_team";
import Product from "./Components/Product";
import OurWorkAndWorkers from "./Components/Work&Worker";
import Footer from "./Components/Footer";
import Testamonial from "./Components/Testamonial";
const HomePage = () => {
  return (
    <div className="bg-gray-800">
      <Banner />
      <Our_team />
      <OurWorkAndWorkers />
      {/* <Cards /> */}
      {/* <About /> */}

      <Product />
      <Testamonial />
      <Exp />
      <Footer />
    </div>
  );
};

export default HomePage;

