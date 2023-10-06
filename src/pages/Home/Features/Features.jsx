import featuresImg from "../../../../public/Resources/Banner_Yoga.png";
const Features = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-black">Our Strategies</h3>
      <div>
        <img className="mx-auto w-full " src={featuresImg} alt="" />
      </div>
    </div>
  );
};

export default Features;