import featuresImg from "../../../../public/Resources/Banner_Yoga.png";
const Features = () => {
  return (
    <div className="text-center bg-purple-50 pt-5">
      <h3 className="text-3xl font-black text-purple-700">Our Strategies</h3>
      <div>
        <img className="mx-auto w-full " src={featuresImg} alt="" />
      </div>
    </div>
  );
};

export default Features;
