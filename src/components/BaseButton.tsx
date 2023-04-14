import clsx from "clsx";
import React, { FC, MouseEventHandler, PropsWithChildren } from "react";

export interface IBaseButton {
  title?: string;
  className?: string;
  type?: "white" | "blue" | "transparent";
  isDisabled?: boolean;
  onClick?: (e: any) => void;
}

const BaseButton: FC<PropsWithChildren<IBaseButton>> = ({
  children,
  title,
  className,
  type = "white",
  isDisabled,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "inline-block shadow-sm duration-300 rounded-md text-base py-2 px-3",
        type === "white" && "bg-white text-gray-800 border",
        type === "blue" &&
          `bg-blue-500 text-white ${!isDisabled && "hover:bg-blue-600"}`,
        type === "transparent" &&
          "!shadow-none text-gray-700 hover:text-gray-500",
        isDisabled && "disabled:opacity-70",
        !isDisabled && "hover:shadow-md",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children || title}
    </button>
  );
};

export default BaseButton;
