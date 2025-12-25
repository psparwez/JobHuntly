import { Link } from "react-router-dom";
import { latestJobLists } from "../../Data/Data.js";
import Pattern from "../../assets/images/latest-jobs/Pattern.svg";
import SectionText from "../SectionText/SectionText.jsx";
import { generateSlug } from "../../utils/index.js";
const LatestJobs = () => {
  return (
    <section className="py-20">
      <div className="container relative overflow-x-hidden">
        <div className="">
          <SectionText
            title="Latest"
            subTitle="jobs open"
            ctaName="Show all jobs"
          />

          {/* lists  */}
          <div className="grid grid-cols-1 gap-10 mt-10 md:gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {latestJobLists.map((joblist) => (
              <div
                className="flex items-start px-4 py-6 transition duration-300 bg-white border border-gray-300 rounded-lg  shadow-2xl shadow-gray-500/10 hover:-translate-y-2 lg:px-6 flex-col min-w-min xs:flex-row gap-4 xs:gap-0"
                key={joblist.id}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 mr-4 bg-white rounded-md sm:rounded-full shadow-sm ring-1 ring-gray-100">
                  <img
                    src={joblist.logo}
                    className="flex-shrink-0 object-cover w-8 lg:w-10"
                    alt={joblist.companyName}
                  />
                </div>
                <div>
                  <Link
                    to={`${generateSlug(joblist.title)}`}
                    className="transition duration-300 select-none hover:text-primaryColor"
                  >
                    <h3 className="mb-1 text-lg sm:text-xl font-semibold">
                      {joblist.title}
                    </h3>
                  </Link>
                  <p className="text-base font-normal text-textGrayColor">
                    {joblist.companyName} <span>{joblist.location}</span>
                  </p>

                  <div className="flex items-center mt-4 *:text-nowrap">
                    <label
                      htmlFor=""
                      className="px-[10px] text-xs py-[4px] lg:text-sm border border-[#56cdad29] select-none text-[#56CDAD] rounded-full bg-[#56CDAD1A]"
                    >
                      {joblist.JobType}
                    </label>
                    <div className="h-7 w-[1px] bg-gray-200 mx-2 block"></div>

                    <div className="flex items-center gap-2">
                      {joblist.jobFields.map((jobfield, index) => (
                        <div key={index}>
                          <div
                            className={` select-none border py-[4px] px-[10px] rounded-full text-sm ${
                              index === 0
                                ? " border-[#ffb93637] bg-[#ffb9360f] text-[#FFB836] "
                                : index === 1
                                ? " border-[#4540de1c] bg-[#4540de0f]  text-[#4540deda]"
                                : ""
                            }`}
                          >
                            {jobfield.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* patter  */}
        <img
          src={Pattern}
          alt="Pattern"
          className="absolute top-0 object-contain opacity-10 w-[450px] h-full right-10 -z-10"
        />
      </div>
    </section>
  );
};

export default LatestJobs;
