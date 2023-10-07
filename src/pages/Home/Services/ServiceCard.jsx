const ServiceCard = ({ serviceData }) => {
  console.log(serviceData);
  const { name, image, price, short_description } = serviceData || {};
  return (
    <div className="rounded-lg flex flex-col lg:flex-row border border-purple-200 drop-shadow-xl">
      <img
        className="rounded-l-lg rounded-r-none"
        src={image}
        alt="Alternative Image"
      />
      <div className="p-4 text-center md:text-left">
        <h3 className="text-black text-xl font-semibold mb-2">{name}</h3>
        <p>{short_description}</p>
        <h2 className="mb-2">US${price}</h2>
        <button className="text-purple-800 border bg-purple-100 border-purple-200 hover:bg-purple-200 font-semibold px-3 py-2 rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
