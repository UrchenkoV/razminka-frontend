import clsx from "clsx";
import React, { FC } from "react";

interface IBaseTextArea {
  value: string;
  valueOnChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  resize?: boolean;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}

const BaseTextArea: FC<IBaseTextArea> = ({
  value,
  valueOnChange,
  placeholder,
  className,
  id,
  minLength,
  maxLength,
  rows,
  resize = true,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="">
      <textarea
        defaultValue={value}
        onChange={(val) => valueOnChange(val.target.value)}
        onFocus={onFocus && ((e) => onFocus(e))}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        rows={rows}
        minLength={minLength}
        maxLength={maxLength}
        className={clsx(
          "block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-700 duration-300 outline-none placeholder:text-gray-500 text-sm",
          resize && "resize-none",
          className
        )}
      ></textarea>
    </div>
  );
};

export default BaseTextArea;
