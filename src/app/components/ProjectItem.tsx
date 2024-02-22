import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  backgroundImg: StaticImageData;
  framework: string;
  projectUrl: string;
};

export default function ProjectItem({
  title,
  backgroundImg,
  framework,
  projectUrl,
}: ProjectItemProps) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-md p-4 group hover:bg-gradient-to-r from-theme-color to-theme-color/80">
      <Image
        className="rounded-md group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className=" pb-4 pt-2 text-white text-center">{framework}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-md bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
