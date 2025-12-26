import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Footer/Logo 2.svg';

import {
  RiFacebookFill,
  RiInstagramLine,
  RiDribbbleLine,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { footerLinks } from '@/data';

const socialLists = [
  {
    id: 1,
    name: 'Facebook',
    icon: <RiFacebookFill />,
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: <RiInstagramLine />,
    url: 'https://www.instagram.com',
  },
  {
    id: 3,
    name: 'Dribbble',
    icon: <RiDribbbleLine />,
    url: 'https://www.dribbble.com',
  },
  {
    id: 4,
    name: 'LinkedIn',
    icon: <RiLinkedinFill />,
    url: 'https://www.linkedin.com',
  },
  {
    id: 5,
    name: 'Twitter',
    icon: <RiTwitterFill />,
    url: 'https://www.twitter.com',
  },
];

const Footer = () => {
  return (
    <footer className="bg-textLightDarkColor py-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* left  */}
          <div className="">
            <Link to="/">
              <img src={Logo} alt="Logo" className="" />
            </Link>
            <p className="mt-5 w-5/6 text-base text-[#D6DDEB]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          {/* menu  */}
          <div className="flex items-start justify-start sm:justify-evenly">
            {footerLinks.map((section) => (
              <div key={section.title} className="mr-10 sm:mr-0">
                <h3 className="mb-4 text-[18px] font-semibold text-blue-50/90">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className="inline-block text-left text-base font-normal text-[#d6ddeb91] transition duration-300 select-none hover:translate-x-2 hover:text-primaryColor"
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
            <h3 className="mb-3 text-[18px] font-semibold text-blue-50/90">
              Get job notifications
            </h3>
            <p className="mb-5 w-10/12 text-gray-200/70">
              The latest job news, articles, sent to your inbox weekly
            </p>
            <form action="" className="w-full">
              <div className="flex h-12 w-full items-center gap-4 overflow-hidden">
                <input
                  type="text"
                  className="h-full w-full rounded-sm border-none bg-blue-50 p-4 text-base text-textDarkColor outline-none"
                  placeholder="Email Address "
                />
                <button
                  className="rounded-sm bg-primaryColor px-6 py-3 text-blue-50 transition duration-300 hover:scale-[1.056]"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* bottom  */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-gray-600/60 pt-10">
          <p
            className="text-sm text-gray-300/70 sm:text-base"
            title="Created by @Ps Parwez"
          >
            &copy; {new Date().getFullYear()} JobHuntly. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {socialLists.map((social) => (
              <li key={social.id}>
                <Link
                  to={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-sm text-white/80 transition duration-300 hover:bg-primaryColor sm:h-8 sm:w-8 sm:text-base"
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
