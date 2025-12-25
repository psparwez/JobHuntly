import { useState, useRef, useEffect } from "react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import HeroImage from "../../assets/images/Home/hero-image.png";
import Vector from "../../assets/images/Home/vector.svg";
import Pattern from "../../assets/images/Home/Pattern.svg";

const popularLists = ["UI Designer", "UX Researcher", "Android", "Admin"];

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("India, Delhi");
  const dropdownRef = useRef(null);

  const locations = [
    "Mumbai, Maharashtra",
    "Bangalore, Karnataka",
    "Pune, Maharashtra",
    "Chennai, Tamil Nadu",
    "Hyderabad, Telangana",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-[#F8F8FD] py-10 pb-0 lg:pt-5 lg:py-0 relative z-10 overflow-x-hidden">
      <div className="container relative z-10 w-full overflow-hidden">
        <div className="grid items-center w-full h-full grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div className="lg:self-start lg:pt-28">
            <div className="relative">
              <h1 className="text-4xl xl:text-7xl leading-none font-semibold font-clashDisplay text-textDarkColor mb-9">
                Discover more than{" "}
                <span className="text-secondryColor">5000+ Jobs</span>
              </h1>
              <img
                src={Vector}
                className="absolute -bottom-7 w-[200px] lg:w-[250px] right-10"
                alt="Vector decoration"
              />
            </div>
            <p className="text-base leading-7 max-w-[90%] mb-3 text-gray">
              Great platform for job seekers passionate about startups and
              seeking new career heights.
            </p>
            {/* Search Bar */}
            <div className="lg:py-7 relative z-20 mt-5 max-w-full mx-auto lg:min-w-[800px] lg:w-full px-5 py-10 rounded-lg shadow-gray-400/15 bg-white shadow-xl">
              <div className="flex flex-wrap items-center gap-5 lg:flex-nowrap">
                {/* Job Title Input */}
                <div className="flex items-center w-full h-full gap-3 transition duration-300 border-b focus-within:border-primaryColor/70 group border-textGrayColor/20">
                  <div className="pb-3 transition duration-300 text- group-focus-within:text-primaryColor">
                    <RiSearchLine size={18} />
                  </div>
                  <input
                    type="text"
                    className="w-full pb-2 outline-none text-textDarkColor"
                    placeholder="Job title or Keywords"
                  />
                </div>
                {/* Location Input */}
                <div
                  className={` relative flex items-center w-full h-full border-b transition duration-300 ${
                    isDropdownOpen
                      ? "border-primaryColor"
                      : "border-textGrayColor/20"
                  } `}
                >
                  <div
                    className={`pb-3 ${
                      isDropdownOpen
                        ? "text-primaryColor"
                        : "text-textGrayColor"
                    }`}
                  >
                    <SlLocationPin size={18} />
                  </div>
                  <div className="w-full h-full" ref={dropdownRef}>
                    {/* Dropdown button */}
                    <div
                      className="flex items-center justify-between group"
                      onClick={toggleDropdown}
                    >
                      <input
                        type="text"
                        value={selectedLocation}
                        readOnly
                        aria-label="Location"
                        className="w-full px-3 pb-2 outline-none cursor-pointer select-none text-textDarkColor"
                      />
                      <div className="pb-3 text-gray">
                        <RiArrowDownSLine
                          className={`transition duration-300  ${
                            isDropdownOpen ? "rotate-180 text-primaryColor" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Dropdown lists */}
                    <div
                      className={`absolute left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
                        isDropdownOpen
                          ? "bottom-[70px] opacity-100 pointer-events-auto"
                          : "bottom-[30px] opacity-0 pointer-events-none"
                      } overflow-hidden`}
                    >
                      <ul className="px-4 py-5">
                        {locations.map((location) => (
                          <li
                            key={location}
                            className="px-3 py-3 text-base border-b cursor-pointer hover:bg-primaryColor/10 border-gray-200 hover:border-primaryColor/20"
                            onClick={() => handleLocationSelect(location)}
                          >
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Search Button */}
                <button className="h-full py-3 px-6 bg-primaryColor whitespace-nowrap text-base font-medium cursor-pointer transition duration-300 hover:bg-primaryColor/90 hover:scale-[1.01] text-blue-50 rounded-md w-full lg:w-fit">
                  Search my job
                </button>
              </div>
            </div>
            <div className="mt-6 gap-4 flex text-base  text-textGrayColor/80 flex-col md:flex-row ">
              <p className="text-[15px]"> Popular Tags:</p>
              <div className="flex flex-wrap gap-2.5">
                {popularLists.map((list) => (
                  <span
                    key={list}
                    className="inline-block px-3 py-1.5 shrink-0 sm:py-2  text-sm font-medium border rounded-lg cursor-pointer sm:mb-0 text-textGrayColor/70 backdrop-blur-sm border-gray/10 hover:bg-blue-100/20"
                  >
                    {list}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-shrink-0 w-full ">
            <img
              src={HeroImage}
              className="lg:ml-auto lg:mx-0 block lg:flex w-[300px] mx-auto xl:w-[450px]"
              alt="Hero representation"
            />
            <div className="w-[280px] h-[716px] rotate-[64deg] bg-white absolute right-0 -bottom-[455px]" />
          </div>
        </div>
        <img
          src={Pattern}
          className="absolute right-0 w-[860px] top-0 -z-10"
          alt="Background pattern"
        />
      </div>
    </section>
  );
};

export default Home;
