import { footerData } from "@/constant/footerData";

const Footer = () => {
  return (
    <footer className="bg-[#F7DDA7] text-[#4A3F35] py-12 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {footerData.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg mb-3 cursor-pointer ">
              {section.title}
            </h2>
            <ul className="space-y-1 ">
              {section.links.map((link, idx) => (
                <a
                  href="https://www.tourism.rajasthan.gov.in/jaipur.html"
                  target="_blank"
                  key={idx}
                  className="block text-left w-full cursor-pointer "
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-sm mt-6">
        <p>Incredible Jaipur Tourism © 2025</p>
        <p className="mt-2">
          For inquiries, contact: tourism-support@jaipur.gov.in
        </p>
      </div>

      <div className="text-center mt-10">
        <a href="#" className="font-semibold underline">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
