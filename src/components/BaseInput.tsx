import clsx from "clsx";
import React, { FC } from "react";

interface IBaseInput {
  value: string;
  valueOnChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

const BaseInput: FC<IBaseInput> = ({
  value,
  valueOnChange,
  placeholder,
  className,
  id,
}) => {
  return (
    <div className="">
      <input
        type="text"
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={(val) => valueOnChange(val.target.value)}
        className={clsx(
          "block w-full rounded-md py-2 px-3 text-gray-800 shadow-sm border border-gray-300 focus:border-gray-700 duration-300 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6",
          className
        )}
      />
    </div>
  );
};

export default BaseInput;
