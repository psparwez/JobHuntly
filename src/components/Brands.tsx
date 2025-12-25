import { brands } from "@/data";

const Brands = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        <h3 className="font-normal text-[18px] leading-7 text-[#202430] opacity-50 text-left">
          Companies we helped grow
        </h3>
        <div className="w-full mt-5  ">
          <div className="flex flex-wrap justify-around items-center gap-4 sm:justify-between">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`${index === 1 || index === 3 || index === 4
                  ? "w-20 lg:w-24"
                  : "w-24"
                  } ml-1 h-max`}
              >
                <img
                  className="md:h-[100px] h-12 opacity-80 object-contain"
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
