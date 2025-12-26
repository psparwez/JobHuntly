import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

interface SectionTextProps {
  title: string;
  subTitle: string;
  ctaName: string;
}

const SectionText = ({ title, subTitle, ctaName }: SectionTextProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="font-clashDisplay text-2xl font-semibold text-textDarkColor lg:text-5xl">
        {title}
        <span className="text-secondryColor"> {subTitle}</span>
      </h2>
      <Link
        to="all-jobs"
        className="group flex items-center gap-[5px] text-sm font-semibold text-nowrap text-primaryColor transition duration-300 md:text-base"
      >
        {ctaName}
        <GoArrowRight className="size-5 transition duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default SectionText;
