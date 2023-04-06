import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostHeader = () => {
  return (
    <div className="flex items-center gap-2 px-5">
      <Link href="#" className="group flex items-center gap-2">
        <div className="">
          <Image
            src={"/bird-48.png"}
            alt={"item.user.name"}
            width={35}
            height={35}
          />
        </div>
        <div className="text-base font-bold text-slate-900 group-hover:text-blue-500 duration-300">
          {"Владислав Юрченко"}
        </div>
      </Link>

      <Link href="#" className="text-sm text-slate-500">
        {"16.31"}
      </Link>
    </div>
  );
};

export default PostHeader;
