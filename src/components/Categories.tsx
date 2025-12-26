import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import SectionText from './common/SectionText';
import { categories } from '@/data';

const Categories = () => {
  const onload = false;

  return (
    <section className="py-10">
      <div className="container">
        <SectionText
          title="Explore by"
          subTitle="category"
          ctaName="Show all jobs"
        />

        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/jobs/category/${category.name.toLowerCase()}`}
                className={`${
                  category.id === 3
                    ? 'bg-gradient-to-tl from-primaryColor to-primaryColor/85'
                    : 'bg-transparent'
                } group w-full rounded-xl border border-[#D6DDEB] p-8 shadow-primaryColor/10 transition duration-300 hover:-translate-y-2 hover:border-primaryColor hover:shadow-2xl`}
              >
                <div className="mb-3 h-18 w-14 rounded-lg bg-white/10 p-2 shadow-lg">
                  {!onload && (
                    <img
                      src={category.icon}
                      alt={category.name}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-2 sm:flex-col md:justify-start">
                  <h3
                    className={`${
                      category.id === 3
                        ? 'text-blue-50 group-hover:text-white'
                        : 'text-textDarkColor/90'
                    } font-clashDisplay text-xl font-semibold transition duration-300 group-hover:text-primaryColor md:text-2xl`}
                  >
                    {category.name}
                  </h3>
                  <div
                    className={`flex items-center justify-between ${
                      category.id === 3
                        ? 'text-blue-50'
                        : 'text-cardTextGrayColor'
                    }`}
                  >
                    <p className="text-sm text-balance sm:text-base">
                      {category.jobs} Jobs available
                    </p>
                    <GoArrowRight
                      size={24}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
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

export default Categories;
