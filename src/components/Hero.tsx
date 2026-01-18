import { useState, useRef, useEffect } from 'react';
import { RiSearchLine, RiArrowDownSLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import HeroImage from '@/assets/images/Home/hero-image.png';
import Vector from '@/assets/images/Home/vector.svg';
import Pattern from '@/assets/images/Home/Pattern.svg';
import { cn } from '@/lib/utils';

const popularLists = ['UI Designer', 'UX Researcher', 'Android', 'Admin'];

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('India, Delhi');
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);

  const locations = [
    'Mumbai, Maharashtra',
    'Bangalore, Karnataka',
    'Pune, Maharashtra',
    'Chennai, Tamil Nadu',
    'Hyderabad, Telangana',
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="relative z-10 overflow-x-hidden bg-[#F8F8FD] py-10 pb-0 lg:py-0 lg:pt-5">
      <div className="relative z-10 container w-full overflow-hidden">
        <div className="grid h-full w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div className="lg:self-start lg:pt-28">
            <div className="relative">
              <h1 className="mb-9 font-clashDisplay text-4xl leading-none font-semibold text-textDarkColor xl:text-7xl">
                Discover more than{' '}
                <span className="text-secondryColor">5000+ Jobs</span>
              </h1>
              <img
                src={Vector}
                className="absolute right-10 -bottom-7 w-[200px] lg:w-[250px]"
                alt="Vector decoration"
              />
            </div>
            <p className="text-gray mb-3 max-w-[90%] text-base leading-7">
              Great platform for job seekers passionate about startups and
              seeking new career heights.
            </p>
            {/* Search Bar */}
            <div className="relative z-20 mx-auto mt-5 max-w-full rounded-lg bg-white px-5 py-10 shadow-xl shadow-gray-400/15 lg:w-full lg:min-w-[800px] lg:py-7">
              <div className="flex flex-wrap items-center gap-5 lg:flex-nowrap">
                {/* Job Title Input */}
                <div className="group flex h-full w-full items-center gap-3 border-b border-textGrayColor/20 transition duration-300 focus-within:border-primaryColor/70">
                  <div className="text- pb-3 transition duration-300 group-focus-within:text-primaryColor">
                    <RiSearchLine size={18} />
                  </div>
                  <input
                    type="text"
                    className="w-full pb-2 text-textDarkColor outline-none"
                    placeholder="Job title or Keywords"
                  />
                </div>
                {/* Location Input */}
                <div
                  ref={locationRef}
                  data-location
                  className={cn(
                    'relative flex h-full w-full items-center border-b transition duration-300',
                    isDropdownOpen
                      ? 'border-primaryColor'
                      : 'border-textGrayColor/20'
                  )}
                >
                  <div
                    className={cn(
                      'pb-3',
                      isDropdownOpen
                        ? 'text-primaryColor'
                        : 'text-textGrayColor'
                    )}
                  >
                    <SlLocationPin size={18} />
                  </div>
                  <div className="h-full w-full" ref={dropdownRef}>
                    {/* Dropdown button */}
                    <button
                      className="group flex w-full items-center justify-between"
                      onClick={toggleDropdown}
                      type="button"
                    >
                      <input
                        type="text"
                        value={selectedLocation}
                        readOnly
                        aria-label="Location"
                        className="select-none-custom w-full cursor-pointer px-3 pb-2 text-textDarkColor outline-none"
                      />
                      <div className="text-gray pb-3">
                        <RiArrowDownSLine
                          className={cn(
                            'transition duration-300',
                            isDropdownOpen ? 'rotate-180 text-primaryColor' : ''
                          )}
                        />
                      </div>
                    </button>

                    {/* Dropdown lists */}
                    <div
                      className={cn(
                        'absolute left-0 w-full overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out',
                        isDropdownOpen
                          ? 'pointer-events-auto bottom-[70px] opacity-100'
                          : 'pointer-events-none bottom-[30px] opacity-0'
                      )}
                    >
                      <ul className="px-4 py-5">
                        {locations.map((location) => (
                          <li
                            key={location}
                            className="cursor-pointer border-b border-gray-200 px-3 py-3 text-base hover:border-primaryColor/20 hover:bg-primaryColor/10"
                          >
                            <button
                              type="button"
                              onClick={() => handleLocationSelect(location)}
                            >
                              {location}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Search Button */}
                <button
                  className="h-full w-full cursor-pointer rounded-md bg-primaryColor px-6 py-3 text-base font-medium whitespace-nowrap text-blue-50 transition duration-300 hover:scale-[1.01] hover:bg-primaryColor/90 lg:w-fit"
                  type="button"
                >
                  Search my job
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-base text-textGrayColor/80 md:flex-row">
              <p className="text-[15px]"> Popular Tags:</p>
              <div className="flex flex-wrap gap-2.5">
                {popularLists.map((list) => (
                  <span
                    key={list}
                    className="inline-block shrink-0 cursor-pointer rounded-lg border border-textDarkColor/10 px-3 py-1.5 text-sm font-medium text-textGrayColor/70 backdrop-blur-sm hover:bg-blue-100/20 sm:mb-0 sm:py-2"
                  >
                    {list}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full flex-shrink-0">
            <img
              src={HeroImage}
              className="mx-auto block w-[300px] lg:mx-0 lg:ml-auto lg:flex xl:w-[450px]"
              alt="Hero representation"
            />
            <div className="absolute right-0 -bottom-[455px] h-[716px] w-[280px] rotate-[64deg] bg-white" />
          </div>
        </div>
        <img
          src={Pattern}
          className="absolute top-0 right-0 -z-10 w-[860px]"
          alt="Background pattern"
        />
      </div>
    </section>
  );
};

export default Hero;
