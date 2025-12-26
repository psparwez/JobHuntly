import { Link } from 'react-router-dom';
import { SlHeart } from 'react-icons/sl';
import { IoMdTime } from 'react-icons/io';
import SectionText from './common/SectionText';
import { jobPosts } from '@/data';
import { generateSlug } from '@/lib/utils';

const FeaturedJobs = () => {
  return (
    <section className="bg-[#F8F8FD] py-20">
      <div className="container">
        <div className="w-full">
          {/* text  */}
          <SectionText
            title="Featured"
            subTitle="jobs"
            ctaName="Show all jobs"
          />
          {/* lists  */}
          <div className="mt-10 grid w-full gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {jobPosts.map((joblist) => (
              <Link
                to={`job-details/${generateSlug(joblist.title)}`}
                key={joblist.company}
                className="relative cursor-pointer rounded-xl border border-gray-400/40 bg-white p-5 transition duration-300 hover:border-primaryColor hover:shadow-xl hover:shadow-gray-100 md:p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex w-full items-start gap-3">
                    {/* icon  */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-[inset_0px_0px_25px_#e7dbff8d]">
                      <img
                        src={joblist.logo}
                        className="h-8 w-8 object-contain"
                        alt={joblist.company}
                      />
                    </div>
                    {/* title , company & fav */}
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col items-start gap-1">
                        <h3 className="line-clamp-1 font-clashDisplay text-lg font-semibold text-textDarkColor sm:text-xl">
                          {joblist.title}
                        </h3>
                        <p className="flex items-center gap-[6px] text-sm font-semibold text-textGrayColor/80">
                          <span>{joblist.company}</span>
                          <span className="h-1 w-1 rounded-full bg-textDarkColor/70"></span>
                          <span>{joblist.application} Application</span>
                        </p>
                      </div>
                      {/* Favorite button */}
                      <button
                        onClick={(e) => e.stopPropagation()}
                        type="button"
                        title="Add to favorites"
                        aria-label="Add to favorites"
                        aria-pressed="false"
                        className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-300/10 transition-all duration-300 hover:border-primaryColor/20 hover:bg-primaryColor/10"
                      >
                        <SlHeart
                          className="text-sm text-gray-400 transition-all duration-300 group-hover:text-primaryColor"
                          aria-hidden="true"
                          focusable="false"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* role  */}
                <ul className="mt-5 mb-4 flex items-center gap-1">
                  {joblist.role.map((role, index) => (
                    <li
                      className={` ${
                        index === 0
                          ? 'bg-[#6a1fff15] text-[#6a1fffd8]'
                          : index === 1
                            ? 'bg-[#16a34a1f] text-[#16a34a]'
                            : index === 2
                              ? 'bg-[#ff832a1f] text-[#ff832ae5]'
                              : 'bg-transparent'
                      } shrink-0 rounded-full px-3 py-[6px] text-xs font-semibold text-nowrap md:text-sm lg:px-4`}
                      key={index}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                {/* desription  */}
                <p className="line-clamp-3 text-base leading-7 font-medium text-gray-700/85">
                  {joblist.description}
                </p>
                {/* divider  */}
                <div className="my-6 h-px w-full bg-textGrayColor/20"></div>
                <div className="flex items-center justify-between">
                  <h3 className="font-clashDisplay text-sm font-semibold text-textDarkColor/80 sm:text-base">
                    ${joblist.salary}{' '}
                    <span className="text-textGrayColor">/hr</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    {/* icon  */}
                    <div className="">
                      <IoMdTime className="text-lg text-textGrayColor" />
                    </div>
                    <p className="text-sm font-medium text-textGrayColor">
                      Posted : {joblist.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
