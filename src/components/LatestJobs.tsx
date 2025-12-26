import { Link } from 'react-router-dom';
import Pattern from '@/assets/images/latest-jobs/Pattern.svg';
import { generateSlug } from '@/lib/utils';
import { latestJobLists } from '@/data';
import SectionText from './common/SectionText';

const LatestJobs = () => {
  return (
    <section className="py-20">
      <div className="relative container overflow-x-hidden">
        <div className="">
          <SectionText
            title="Latest"
            subTitle="jobs open"
            ctaName="Show all jobs"
          />

          {/* lists  */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-y-4 xl:grid-cols-3">
            {latestJobLists.map((joblist) => (
              <div
                className="flex min-w-min flex-col items-start gap-4 rounded-lg border border-gray-300 bg-white px-4 py-6 shadow-2xl shadow-gray-500/10 transition duration-300 hover:-translate-y-2 xs:flex-row xs:gap-0 lg:px-6"
                key={joblist.id}
              >
                <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-gray-100 sm:rounded-full lg:h-16 lg:w-16">
                  <img
                    src={joblist.logo}
                    className="w-8 flex-shrink-0 object-cover lg:w-10"
                    alt={joblist.companyName}
                  />
                </div>
                <div>
                  <Link
                    to={`${generateSlug(joblist.title)}`}
                    className="transition duration-300 select-none hover:text-primaryColor"
                  >
                    <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                      {joblist.title}
                    </h3>
                  </Link>
                  <p className="text-base font-normal text-textGrayColor">
                    {joblist.companyName} <span>{joblist.location}</span>
                  </p>

                  <div className="mt-4 flex items-center *:text-nowrap">
                    <label
                      htmlFor=""
                      className="rounded-full border border-[#56cdad29] bg-[#56CDAD1A] px-[10px] py-[4px] text-xs text-[#56CDAD] select-none lg:text-sm"
                    >
                      {joblist.JobType}
                    </label>
                    <div className="mx-2 block h-7 w-[1px] bg-gray-200"></div>

                    <div className="flex items-center gap-2">
                      {joblist.jobFields.map((jobfield, index) => (
                        <div key={index}>
                          <div
                            className={`rounded-full border px-[10px] py-[4px] text-sm select-none ${
                              index === 0
                                ? 'border-[#ffb93637] bg-[#ffb9360f] text-[#FFB836]'
                                : index === 1
                                  ? 'border-[#4540de1c] bg-[#4540de0f] text-[#4540deda]'
                                  : ''
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
          className="absolute top-0 right-10 -z-10 h-full w-[450px] object-contain opacity-10"
        />
      </div>
    </section>
  );
};

export default LatestJobs;
