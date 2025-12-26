import DashboardImage from '@/assets/images/cta/3.1 Dashboard Company.jpg';

const Cta = () => {
  return (
    <section className="py-10">
      <div className="container overflow-hidden">
        <div className="before:conten-[''] relative z-10 grid w-full bg-primaryColor px-9 pt-20 pb-0 before:absolute before:-top-[250px] before:-left-[200px] before:h-[700px] before:w-[100px] before:rotate-[60deg] before:bg-white before:content-[''] after:absolute after:right-0 after:-bottom-[350px] after:-z-10 after:h-[700px] after:w-[100px] after:rotate-[60deg] after:bg-white md:grid-cols-2 lg:px-20 lg:pt-20">
          {/* text  */}
          <div className="flex w-full flex-col items-start gap-5">
            <h2 className="font-clashDisplay text-4xl leading-[1.085] font-semibold text-blue-50 lg:text-5xl">
              Start posting <br className="hidden sm:block" /> jobs today
            </h2>
            <p className="w-5/6 text-base font-medium text-blue-50/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              className="cursor-pointer rounded-sm bg-blue-50 px-5 py-3 font-semibold text-primaryColor transition duration-300 hover:scale-[1.02] hover:opacity-90"
              type="button"
            >
              Sign up for free
            </button>
          </div>
          {/* image  */}
          <div className="self-end">
            <div className="overflow-hidden">
              <img src={DashboardImage} alt="Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
