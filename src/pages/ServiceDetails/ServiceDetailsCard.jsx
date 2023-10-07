const ServiceDetailsCard = ({ service }) => {
  const { id, name, image, price, short_description, overview } = service || {};
  return (
    <div className="m-10 rounded">
      <h3 className="mt-10 text-3xl font-black text-center my-5">
        <span className="font-bold text-2xl text-purple-600">
          {" "}
          Event {id}:{" "}
        </span>{" "}
        {name}
      </h3>
      <h3 className="text-center my-5">
        {" "}
        <span className="font-black text-2xl mr-5 text-purple-800">
          Price: US ${price}
        </span>
        <button className="bg-red-600 text-white hover:bg-purple-700 font-semibold text-sm px-3 py-2">
          Book Now
        </button>
      </h3>
      <img className="w-full rounded-md" src={image} alt="Alternative Image" />

      <p className="py-5 font-semibold">{short_description}</p>
      <div className="my-4">
        <h4 className="font-bold text-base">Overview of the {name} Event:</h4>
        <p className="text-xs">{overview}</p>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
