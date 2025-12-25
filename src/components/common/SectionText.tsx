import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

interface SectionTextProps {
  title: string
  subTitle: string
  ctaName: string
}

const SectionText = ({ title, subTitle, ctaName }: SectionTextProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-2xl font-semibold lg:text-5xl text-textDarkColor font-clashDisplay">
        {title}
        <span className="text-secondryColor "> {subTitle}</span>
      </h2>
      <Link
        to="all-jobs"
        className="flex group items-center gap-[5px] font-semibold md:text-base text-sm text-nowrap text-primaryColor transition duration-300"
      >
        {ctaName}
        <GoArrowRight className="transition duration-300 group-hover:translate-x-1 size-5" />
      </Link>
    </div>
  );
};

export default SectionText;