import clsx from "clsx";

import React, { FC, PropsWithChildren } from "react";

interface IBaseActionWithIcon {
  color?: "blue" | "red" | "gray";
  title?: string;
  count?: number;
}

const BaseActionWithIcon: FC<PropsWithChildren<IBaseActionWithIcon>> = ({
  children,
  color = "blue",
  title,
  count,
}) => {
  return (
    <div
      className="flex items-center gap-0.5 text-gray-800 cursor-pointer group"
      title={title}
    >
      <div
        className={clsx(
          "p-1.5  rounded-full duration-300",
          color === "blue" &&
            "group-hover:bg-blue-100 group-hover:text-blue-500",
          color === "red" && "group-hover:bg-red-100 group-hover:text-red-500",
          color === "gray" &&
            "group-hover:bg-gray-100 group-hover:text-gray-500"
        )}
      >
        {children}
      </div>

      {count && (
        <span
          className={clsx(
            "text-sm duration-300",
            color === "blue"
              ? "group-hover:text-blue-500"
              : "group-hover:text-red-500"
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default BaseActionWithIcon;
