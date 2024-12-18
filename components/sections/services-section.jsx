import MagicBadge from "../magic-badge";
import ServiceCard from "./service-card";

const ServicesSection = () => {
  return (
    <div className="py-40" id="#services">
      <div className="flex items-center justify-center flex-col">
        <MagicBadge title="Services" />
      </div>

      <ServiceCard />
    </div>
  );
};

export default ServicesSection;
