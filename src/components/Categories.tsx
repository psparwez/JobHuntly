import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import SectionText from "./common/SectionText";
import { categories } from "@/data";

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

        <div className="w-full mt-10">
          <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/jobs/category/${category.name.toLowerCase()}`}
                className={`${category.id === 3
                  ? "bg-gradient-to-tl from-primaryColor to-primaryColor/85 "
                  : "bg-transparent"
                  } w-full hover:shadow-2xl hover:-translate-y-2 shadow-primaryColor/10 hover:border-primaryColor duration-300 transition group rounded-xl border border-[#D6DDEB] p-8`}
              >
                <div className="p-2 mb-3 rounded-lg shadow-lg h-18 w-14 bg-white/10">
                  {!onload && (
                    <img
                      src={category.icon}
                      alt={category.name}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-2 md:justify-start sm:flex-col">
                  <h3
                    className={`${category.id === 3
                      ? "text-blue-50 group-hover:text-white"
                      : "text-textDarkColor/90"
                      } font-semibold text-xl md:text-2xl font-clashDisplay group-hover:text-primaryColor transition duration-300`}
                  >
                    {category.name}
                  </h3>
                  <div
                    className={`flex items-center justify-between ${category.id === 3
                      ? "text-blue-50"
                      : "text-cardTextGrayColor"
                      }`}
                  >
                    <p className="text-sm sm:text-base text-balance">
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
