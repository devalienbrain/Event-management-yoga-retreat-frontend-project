import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  const servicesData = useLoaderData();
  // console.log(servicesData);
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Services servicesData={servicesData}></Services>
        <Features></Features>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
