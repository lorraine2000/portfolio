import { CiPen } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { services } from "../data/data";

// ServiceCards component renders a list of service cards from `services` data
const ServiceCards = () => {
  return (
    <div className="my-7">
      {/* Grid layout to display cards responsively */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group transition-all duration-300 hover:shadow-button-light hover:dark:shadow-button-dark 
              cursor-pointer relative p-6 max-w-2xl overflow-hidden 
              border-border-light dark:bg-bg-dark border dark:border-border-dark 
              rounded-lg shadow-md hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-black dark:text-white">
                {service.title}
              </h3>
              <CiPen className="text-2xl text-slate-600 dark:text-gray-dark" />
            </div>

            <p className="text-slate-600 dark:text-gray-dark mt-2">
              {service.description}
            </p>

            <div className="my-4">
              <span className="text-2xl font-bold text-black dark:text-white">
                {service.price}
              </span>
              <span className="text-slate-600 dark:text-gray-dark">
                {service.duration}
              </span>
            </div>

            <CustomButton
              text="Contact me"
              className="bg-[#A7C9F9] shadow-2xl hover:bg-[#A7C9F9]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
