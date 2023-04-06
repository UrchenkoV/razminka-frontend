import React, { FC, PropsWithChildren } from "react";

export interface IBaseButton {
  children?: PropsWithChildren | any;
  title?: string;
  className?: string;
}

const BaseButton: FC<IBaseButton> = ({ children, title, className }) => {
  return (
    <button className="inline-block bg-white text-slate-800 shadow-sm hover:shadow-md duration-300 rounded-xl text-base py-2 px-3">
      {children || title}
    </button>
  );
};

export default BaseButton;
