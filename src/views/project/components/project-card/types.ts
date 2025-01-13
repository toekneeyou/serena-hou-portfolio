import { ReactNode } from "react";
import { ElementProps } from "src/types/types";

export interface ProjectCardProps extends ElementProps<HTMLDivElement> {
  header: string[];
  subheader: string[];
  skills: string[];
  visual?: ReactNode;
  background?: string;
}
