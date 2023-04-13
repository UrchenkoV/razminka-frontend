import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";

interface IBaseCategoryLink {
  title: string;
  href: string;
  image: string;
  size?: "small" | "medium";
}

const BaseCategoryLink: FC<IBaseCategoryLink> = ({
  href,
  image,
  title,
  size = "small",
}) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-2">
        <div
          className={clsx(
            "rounded overflow-hidden",
            size === "small" ? "w-8 h-8" : "w-11 h-11"
          )}
        >
          <img src={image} alt={title} />
        </div>
        <div className="font-bold text-base">{title}</div>
      </div>
    </Link>
  );
};

export default BaseCategoryLink;
