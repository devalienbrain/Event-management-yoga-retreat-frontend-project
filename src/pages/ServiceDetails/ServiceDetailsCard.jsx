const ServiceDetailsCard = ({ service }) => {
  const { name, image, price, short_description } = service || {};
  return (
    <div className="m-10 rounded">
      <img className="w-full rounded-md" src={image} alt="Alternative Image" />

      <h3 className="mt-10 text-3xl font-bold">{name}</h3>
      <p className="py-5">{short_description}</p>
    </div>
  );
};

export default ServiceDetailsCard;
