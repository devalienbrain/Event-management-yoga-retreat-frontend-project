import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Team from "./Team/Team";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const servicesData = useLoaderData();
  // console.log(servicesData);
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <div data-aos="fade">
          <Services servicesData={servicesData}></Services>
        </div>
        <Features></Features>
        <div data-aos="fade">
          <Team></Team>
        </div>
      </div>
    </div>
  );
};

export default Home;
