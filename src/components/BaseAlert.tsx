import clsx from "clsx";
import React, { FC } from "react";

interface IBaseAlert {
  massage: string;
  type: "error";
}

const BaseAlert: FC<IBaseAlert> = ({ massage, type }) => {
  return (
    <div
      className={clsx(
        "py-3 px-5 rounded-lg shadow-sm",
        type === "error" && "bg-red-50 text-red-900"
      )}
    >
      <div className="">{massage}</div>
    </div>
  );
};

export default BaseAlert;
