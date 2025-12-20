import { BsAirplane } from "react-icons/bs";
import { FaBusAlt, FaTrain } from "react-icons/fa";

const Reach = () => {
  return (
    <section className="bg-[#F7EFE5] py-20 px-10 md:px-24 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 space-y-10">
        <h1 className="text-4xl font-serif tracking-wide text-[#5B4636]">
          HOW TO REACH HERE
        </h1>

        <div className="flex items-start gap-6">
          <BsAirplane className="text-8xl text-[#E58E26]" />
          <p className="text-[#5B4636] leading-relaxed">
            The Jaipur International Airport is called Sanganer Airport. There
            are domestic flight connections to and from Delhi, Kolkata, Mumbai,
            Ahmedabad, Jodhpur, Udaipur and several other places. International
            flights operate to Dubai, Muscat, Singapore & Bangkok.
          </p>
        </div>

        <div className="flex items-start gap-6">
          <FaBusAlt className="text-5xl text-[#E58E26]" />
          <p className="text-[#5B4636] leading-relaxed">
            A convenient way to travel to Jaipur is by road. Regular AC & deluxe
            buses are available from all major cities in Rajasthan.
          </p>
        </div>

        <div className="flex items-start gap-6">
          <FaTrain className="text-5xl text-[#E58E26]" />
          <p className="text-[#5B4636] leading-relaxed">
            Jaipur is well-connected via rail from all major cities including
            Delhi, Agra, Mumbai, Chennai, Jodhpur, Udaipur, Ahmedabad,
            Bangalore, Kolkata & more.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/jaipur-district-map.webp"
          alt="Jaipur Map"
          className="w-96 opacity-90"
        />
      </div>
    </section>
  );
};

export default Reach;
