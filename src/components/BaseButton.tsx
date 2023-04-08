import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

export interface IBaseButton {
  title?: string;
  className?: string;
}

const BaseButton: FC<PropsWithChildren<IBaseButton>> = ({
  children,
  title,
  className,
}) => {
  return (
    <button
      className={clsx(
        "inline-block bg-white text-slate-800 shadow-sm hover:shadow-md border duration-300 rounded-xl text-base py-2 px-3",
        className
      )}
    >
      {children || title}
    </button>
  );
};

export default BaseButton;
