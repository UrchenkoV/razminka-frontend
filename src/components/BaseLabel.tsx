import clsx from "clsx";
import React, { FC } from "react";

interface IBaseLabel {
  title: string;
  htmlFor?: string;
  className?: string;
}

const BaseLabel: FC<IBaseLabel> = ({ title, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block text-sm font-medium leading-6 text-slate-700",
        className
      )}
    >
      {title}
    </label>
  );
};

export default BaseLabel;
