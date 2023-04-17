import clsx from "clsx";
import React, { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

interface IBaseInput {
  value: string;
  placeholder?: string;
  className?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  helperMessage?: string;
  isError?: boolean;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onChangeText?: (val: string) => void;
}

const BaseInput = React.forwardRef<HTMLInputElement, IBaseInput>(
  (
    {
      value,
      onChangeText,
      placeholder,
      className,
      name,
      type = "text",
      label,
      helperMessage,
      isError,
      onChange,
      onBlur,
    },
    ref
  ) => {
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeText) onChangeText(e.target.value);
      if (onChange) onChange(e);
    };
    return (
      <div className="">
        {label && (
          <label
            htmlFor={name}
            className={clsx(
              "block mb-2 text-sm font-medium",
              isError ? "text-red-700" : "text-gray-700"
            )}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandle}
          onBlur={onBlur}
          className={clsx(
            "block w-full rounded-md py-2.5 px-4 shadow-sm border duration-300 outline-none sm:text-sm sm:leading-6",
            isError
              ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
              : "text-gray-700 border-gray-300 focus:border-gray-700 placeholder:text-gray-400 ",
            className
          )}
        />
        {helperMessage && (
          <p
            className={clsx(
              "mt-2 text-sm",
              isError ? "text-red-600" : "text-gray-600"
            )}
          >
            {helperMessage}
          </p>
        )}
      </div>
    );
  }
);

export default BaseInput;
