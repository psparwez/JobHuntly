import { Link } from "react-router-dom";
import Logo from "@/assets/images/Footer/Logo 2.svg";

import {
  RiFacebookFill,
  RiInstagramLine,
  RiDribbbleLine,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import { footerLinks } from "@/data";

const socialLists = [
  {
    id: 1,
    name: "Facebook",
    icon: <RiFacebookFill />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <RiInstagramLine />,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Dribbble",
    icon: <RiDribbbleLine />,
    url: "https://www.dribbble.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <RiLinkedinFill />,
    url: "https://www.linkedin.com",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <RiTwitterFill />,
    url: "https://www.twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className="py-20 pb-10 bg-textLightDarkColor">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* left  */}
          <div className="">
            <Link to='/'>
              <img src={Logo} alt="Logo" className="" />
            </Link>
            <p className="text-base w-5/6 mt-5 text-[#D6DDEB] ">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          {/* menu  */}
          <div className="flex items-start justify-start sm:justify-evenly">
            {footerLinks.map((section) => (
              <div key={section.title} className="mr-10 sm:mr-0">
                <h3 className="font-semibold text-[18px] text-blue-50/90 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className="text-[#d6ddeb91] font-normal text-base text-left hover:text-primaryColor hover:translate-x-2  duration-300 transition inline-block select-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* right  */}
          <div className="">
            <h3 className="font-semibold text-[18px] text-blue-50/90 mb-3">
              Get job notifications
            </h3>
            <p className="w-10/12 mb-5 text-gray-200/70">
              The latest job news, articles, sent to your inbox weekly
            </p>
            <form action="" className="w-full ">
              <div className="flex items-center w-full h-12 gap-4 overflow-hidden">
                <input
                  type="text"
                  className="w-full h-full p-4 text-base border-none rounded-sm outline-none bg-blue-50 text-textDarkColor"
                  placeholder="Email Address "
                />
                <button className="py-3 transition duration-300 hover:scale-[1.056] rounded-sm px-6 bg-primaryColor text-blue-50">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* bottom  */}
        <div className="flex flex-wrap items-center justify-between gap-5 pt-10 mt-10 border-t border-gray-600/60">
          <p
            className="text-sm sm:text-base text-gray-300/70"
            title="Created by @Ps Parwez"
          >
            &copy; {new Date().getFullYear()} JobHuntly. All rights reserved.
          </p>
          <ul className="flex items-center gap-2 ">
            {socialLists.map((social) => (
              <li key={social.id}>
                <Link
                  to={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm transition duration-300 rounded-full cursor-pointer sm:text-base w-7 h-7 sm:w-8 sm:h-8 hover:bg-primaryColor text-white/80 bg-white/10"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
