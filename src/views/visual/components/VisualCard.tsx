import clsx from "clsx";
import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

interface VisualCardProps {
  img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  title: string;
  description: string;
}

export const VisualCard: FC<VisualCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="visual-card w-full">
      <img
        {...img}
        className={clsx("mb-2 rounded-xl h-52 object-cover", "lg:h-64")}
      />
      <h3 className={clsx("text-18px font-bold mb-1", "lg:text-20px")}>
        {title}
      </h3>
      <p className={clsx("text-12px text-neutral-300", "lg:text-14px")}>
        {description}
      </p>
    </div>
  );
};
