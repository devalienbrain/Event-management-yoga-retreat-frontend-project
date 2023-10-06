import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Features></Features>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
