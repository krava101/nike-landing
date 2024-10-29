import { services } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="padding-x py-10">
      <ul className="flex flex-wrap justify-center max-container gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </ul>
    </section>
  );
};

export default Services;
