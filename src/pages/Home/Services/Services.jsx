import ServiceCard from "./ServiceCard";

const Services = ({ servicesData }) => {
  // console.log(servicesData);
  return (
    <div className="text-center my-10">
      <h3 className="text-3xl font-black">The Services We Provide</h3>
      <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-5">
        {servicesData.map((serviceData) => (
          <ServiceCard
            key={serviceData.id}
            serviceData={serviceData}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
