import { SVGProps } from "react";

export interface CustomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  variant?: "outline" | "filled";
}
