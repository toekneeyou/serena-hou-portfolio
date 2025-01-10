import { createElement, ReactNode } from "react";
import { classnames } from "../../lib/helpers/helpers";

interface CaseStudyListProps {
  as?: "ol" | "ul";
  list: { header: string; body: ReactNode }[];
  variant?: "card";
}

export default function CaseStudyList({
  as = "ul",
  list,
  variant,
}: CaseStudyListProps) {
  const renderListItems = (item: {
    header: string;
    body: ReactNode | string;
  }) => {
    return createElement(
      "li",
      { className: classnames({ "bg-case-study-gws": variant === "card" }) },
      [
        createElement(
          "h3",
          {
            className: classnames("text-2xl font-bold mb-2"),
          },
          item.header
        ),
        typeof item.body === "string"
          ? createElement("p", {}, item.body)
          : item.body,
      ]
    );
  };

  return createElement(
    as,
    {
      className: classnames("space-y-6 text-lg", {
        "list-decimal marker:text-2xl marker:font-bold ml-6": as === "ol",
      }),
    },
    list.map(renderListItems)
  );
}
