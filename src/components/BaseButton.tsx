import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export interface IBaseButton {
  title?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  color?: "white" | "blue" | "transparent";
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const BaseButton: FC<PropsWithChildren<IBaseButton>> = ({
  children,
  title,
  className,
  color = "white",
  type = "button",
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "inline-block shadow-sm duration-300 rounded-md text-base py-2 px-3",
        color === "white" && "bg-white text-gray-800 border",
        color === "blue" &&
          `bg-blue-500 text-white ${!disabled && "hover:bg-blue-600"}`,
        color === "transparent" &&
          "!shadow-none text-gray-700 hover:text-gray-500",
        disabled && "disabled:opacity-70",
        !disabled && "hover:shadow-md",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children || title}
    </button>
  );
};

export default BaseButton;
