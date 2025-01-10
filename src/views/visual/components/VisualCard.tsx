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
    <div className="visual-card">
      <img {...img} className="mb-2 rounded-xl" />
      <h3 className="text-18 font-bold">{title}</h3>
      <p className="text-12 text-[#ccc]">{description}</p>
    </div>
  );
};
