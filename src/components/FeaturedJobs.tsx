import { Link } from "react-router-dom";
import { SlHeart } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import SectionText from "./common/SectionText";
import { jobPosts } from "@/data";
import { generateSlug } from "@/lib/utils";

const FeaturedJobs = () => {
  return (
    <section className="py-20 bg-[#F8F8FD]">
      <div className="container">
        <div className="w-full ">
          {/* text  */}
          <SectionText
            title="Featured"
            subTitle="jobs"
            ctaName="Show all jobs"
          />
          {/* lists  */}
          <div className="grid w-full gap-10 mt-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {jobPosts.map((joblist) => (
              <Link
                to={`job-details/${generateSlug(joblist.title)}`}
                key={joblist.company}
                className="relative transition duration-300 bg-white border cursor-pointer hover:border-primaryColor hover:shadow-xl hover:shadow-gray-100 border-gray-400/40 rounded-xl p-5 md:p-6  lg:p-7 "
              >
                <div className="flex items-start justify-between gap-2 ">
                  <div className="flex items-start gap-3 w-full">
                    {/* icon  */}
                    <div className="h-14 shrink-0 flex items-center justify-center w-14 rounded-lg bg-white shadow-[inset_0px_0px_25px_#e7dbff8d] p-2">
                      <img
                        src={joblist.logo}
                        className="object-contain w-8 h-8"
                        alt={joblist.company}
                      />
                    </div>
                    {/* title , company & fav */}
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col items-start gap-1">
                        <h3 className="text-lg line-clamp-1 sm:text-xl font-semibold font-clashDisplay text-textDarkColor">
                          {joblist.title}
                        </h3>
                        <p className="text-sm gap-[6px] flex items-center text-textGrayColor/80 font-semibold ">
                          <span>{joblist.company}</span>
                          <span className="w-1 h-1 rounded-full bg-textDarkColor/70"></span>
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
                        className="flex items-center justify-center w-8 h-8 transition-all duration-300 border border-gray-100 rounded-full hover:border-primaryColor/20 group hover:bg-primaryColor/10 bg-gray-300/10"
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
                <ul className="flex items-center gap-1 mt-5 mb-4">
                  {joblist.role.map((role, index) => (
                    <li
                      className={` ${index === 0
                        ? "bg-[#6a1fff15] text-[#6a1fffd8]"
                        : index === 1
                          ? "bg-[#16a34a1f] text-[#16a34a]"
                          : index === 2
                            ? "bg-[#ff832a1f] text-[#ff832ae5]"
                            : "bg-transparent"
                        } py-[6px] shrink-0 text-nowrap text-xs  md:text-sm px-3 lg:px-4 rounded-full  font-semibold`}
                      key={index}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                {/* desription  */}
                <p className="text-base font-medium leading-7 line-clamp-3 text-gray-700/85 ">
                  {joblist.description}
                </p>
                {/* divider  */}
                <div className="h-px w-full bg-textGrayColor/20 my-6 "></div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm sm:text-base font-clashDisplay text-textDarkColor/80">
                    ${joblist.salary}{" "}
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
