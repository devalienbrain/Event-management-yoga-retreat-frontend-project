import bannerImg from "../../../../public/Resources/yoga_banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bannerImg})`,
        objectFit: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="hero-content text-center">
        <div>
          <h1 className="mb-5 text-2xl md:text-5xl text-white font-black">
            Enrich your life with an unforgettable yoga retreat
          </h1>
          <h3 className="mb-5 text-red-400 font-black">
            Yoga And Fitness Retreats By Dr. Fatiha
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
