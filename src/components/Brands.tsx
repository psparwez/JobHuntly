import { brands } from '@/data';

const Brands = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h3 className="text-left text-[18px] leading-7 font-normal text-[#202430] opacity-50">
          Companies we helped grow
        </h3>
        <div className="mt-5 w-full">
          <div className="flex flex-wrap items-center justify-around gap-4 sm:justify-between">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 3 || index === 4
                    ? 'w-20 lg:w-24'
                    : 'w-24'
                } ml-1 h-max`}
              >
                <img
                  className="h-12 object-contain opacity-80 md:h-[100px]"
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
