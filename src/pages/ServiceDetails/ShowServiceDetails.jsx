import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ShowServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const theService = services.find((service) => service.id == id);
  return (
    <ServiceDetailsCard
      key={theService.id}
      service={theService}
    ></ServiceDetailsCard>
  );
};

export default ShowServiceDetails;
