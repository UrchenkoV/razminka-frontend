import { BellIcon, Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BaseButton from "../BaseButton";
import MainHeaderProfile from "./MainHeaderProfile";

const MainHeader: React.FC = () => {
  return (
    <div className="h-14 bg-blue-200 flex items-center sticky top-0 left-0 w-full z-20">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="cursor-pointer leading-none">
              <Bars3Icon
                className="w-7 h-7 text-slate-700"
                aria-hidden="true"
              />
            </div>
            <div className="">
              <Link href="/">
                <Image
                  src="/bird-48.png"
                  alt="Разминка"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-20">
            <div className="">
              <input
                type="text"
                className="py-2 px-3 rounded-xl w-[300px] bg-blue-100 hover:bg-white focus:outline-none border focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:ring-offset-2 focus:bg-white text-slate-600 placeholder:text-slate-600 duration-300"
                placeholder="Поиск"
              />
            </div>
            <Link href={"/create"}>
              <BaseButton>
                <div className="flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" aria-hidden="true" />
                  Создать
                </div>
              </BaseButton>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="notification">
              <BellIcon
                className="h-6 w-6 text-slate-700 hover:text-blue-500 duration-300 cursor-pointer"
                aria-hidden="true"
              />
            </div>

            <MainHeaderProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
